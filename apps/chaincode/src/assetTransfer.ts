/*
 SPDX-License-Identifier: Apache-2.0
*/

// const { Contract } = require("fabric-contract-api");
import {
  Context,
  Contract,
  Info,
  Returns,
  Transaction,
} from "fabric-contract-api";
import { Asset, AssetStatus } from "./model";

@Info({
  title: "AssetTransfer",
  description: "Smart contract for transferring assets",
})
export class AssetTransfer extends Contract {
  /**
   * Create new asset
   */
  @Transaction()
  async CreateAsset(
    ctx: Context,
    id: string,
    size: number,
    location: string,
    owner: string,
  ): Promise<void> {
    const exists = await this._AssetExists(ctx, id);
    if (exists) {
      throw new Error(`Asset id ${id} is already exists`);
    }

    const newAsset = new Asset(id, size, location, owner);
    await ctx.stub.putState(id, Buffer.from(JSON.stringify(newAsset)));

    // If owner exist, add to the index
    if (owner) {
      const indexName = "owner";
      const assetOwnerIndexKey = ctx.stub.createCompositeKey(indexName, [
        owner,
        id,
      ]);

      await ctx.stub.putState(assetOwnerIndexKey, Buffer.from("\u0000"));
    }
  }

  /**
   * Get all assets
   */
  @Transaction(false)
  @Returns("string")
  async GetAllAssets(ctx: Context): Promise<string> {
    const results = [];

    const iterator = await ctx.stub.getStateByRange("", "");
    let result = await iterator.next();

    while (!result.done) {
      const record = Buffer.from(result.value.value.toString()).toString(
        "utf8",
      );

      results.push(JSON.parse(record));
      result = await iterator.next();
    }
    iterator.close();

    return JSON.stringify(results);
  }

  /**
   * Get asset by Asset ID
   */
  @Transaction(false)
  @Returns("Asset")
  async GetAsset(ctx: Context, id: string): Promise<Asset> {
    const asset = await ctx.stub.getState(id);

    if (!asset || asset.length === 0) {
      throw new Error(`Asset ${id} does not exist`);
    }

    return JSON.parse(asset.toString());
  }

  /**
   * Transfer asset to different owner
   */
  @Transaction()
  async TransferAsset(
    ctx: Context,
    id: string,
    newOwner: string,
  ): Promise<void> {
    const asset = await this.GetAsset(ctx, id);

    asset.owner = newOwner;
    asset.status = AssetStatus.TRANSFER_PENDING;

    const data = Buffer.from(JSON.stringify(asset));
    await ctx.stub.putState(id, data);
  }

  /**
   * Lock asset
   */
  @Transaction()
  async LockAsset(ctx: Context, id: string): Promise<void> {
    const asset = await this.GetAsset(ctx, id);

    asset.status = AssetStatus.LOCKED;

    const data = Buffer.from(JSON.stringify(asset));
    await ctx.stub.putState(id, data);
  }

  /**
   * Release asset
   */
  @Transaction()
  async ReleaseAsset(ctx: Context, id: string): Promise<void> {
    const asset = await this.GetAsset(ctx, id);

    asset.status = AssetStatus.OWNED;

    const data = Buffer.from(JSON.stringify(asset));
    await ctx.stub.putState(id, data);
  }

  /**
   * Get asset transaction history
   * returns the chain of custody for an asset since issuance
   */
  @Transaction(false)
  @Returns("string")
  async GetAssetHistory(ctx: Context, id: string): Promise<string> {
    const results = [];

    const iterator = await ctx.stub.getHistoryForKey(id);
    let result = await iterator.next();

    while (!result.done) {
      if (result.value && result.value.value.toString()) {
        results.push({
          txId: result.value.txId,
          timestamp: result.value.timestamp,
          value: JSON.parse(result.value.value.toString()),
        });
      }
      result = await iterator.next();
    }
    iterator.close();

    return JSON.stringify(results);
  }

  /**
   * Get asset list by owner
   */
  @Transaction(false)
  @Returns("string")
  async QueryAssetsByOwner(ctx: Context, owner: string): Promise<string> {
    const queryString = {
      selector: {
        docType: "asset",
        owner: owner,
      },
    };

    return await this._GetQueryResultForQueryString(
      ctx,
      JSON.stringify(queryString),
    );
  }

  /**
   * Get Query Result for QueryString
   * executes the passed in query string. Result set is built and returned as
   * a byte array containing the JSON results.
   */
  @Transaction(false)
  @Returns("string")
  private async _GetQueryResultForQueryString(
    ctx: Context,
    queryString: string,
  ): Promise<string> {
    const results = [];

    const iterator = await ctx.stub.getQueryResult(queryString);
    let result = await iterator.next();

    while (!result.done) {
      if (result.value && result.value.value.toString()) {
        results.push(JSON.parse(result.value.value.toString()));
      }
      result = await iterator.next();
    }
    iterator.close();

    return JSON.stringify(results);
  }

  /**
   * Check if asset already exist
   * returns true when asset with given ID exists in world state
   */
  @Transaction(false)
  @Returns("boolean")
  private async _AssetExists(ctx: Context, id: string): Promise<boolean> {
    let assetState = await ctx.stub.getState(id);
    return assetState && assetState.length > 0;
  }
}
