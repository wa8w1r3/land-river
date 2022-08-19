import { v4 as uuid } from "uuid";
import {
  evaluateTransaction,
  submitTransaction,
} from "./Hyperledger.service.js";

/**
 * Get all assets.
 *
 * @returns
 */
async function get() {
  try {
    const assets = await evaluateTransaction("GetAllAssets");
    return JSON.parse(assets);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Get asset detail by id.
 *
 * @param id
 * @returns
 */
async function getById(id) {
  try {
    const asset = await evaluateTransaction("GetAsset", id);
    return JSON.parse(asset);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Get assets by owner.
 *
 * @param owner
 * @returns
 */
async function getByOwner(owner) {
  try {
    const asset = await evaluateTransaction("QueryAssetsByOwner", owner);
    return JSON.parse(asset);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Get asset transaction history.
 *
 * @param id
 * @returns
 */
async function getAssetHistory(id) {
  try {
    const asset = await evaluateTransaction("GetAssetHistory", id);
    return JSON.parse(asset);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Create new asset.
 *
 * @param asset
 * @returns
 */
async function create(asset) {
  try {
    const id = uuid();

    await submitTransaction("CreateAsset", [
      id.slice(0, 8),
      asset.size,
      asset.location,
      asset.owner,
    ]);

    const result = await evaluateTransaction("GetAsset", id);

    return JSON.parse(result);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Transfer asset.
 *
 * @param asset
 * @returns
 */
async function transfer(asset) {
  try {
    await submitTransaction("TransferAsset", [asset.id, asset.owner]);

    const result = await evaluateTransaction("GetAsset", asset.id);

    return JSON.parse(result);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Accept asset transfer.
 *
 * @param asset
 * @returns
 */
async function accept(asset) {
  try {
    await submitTransaction("AcceptAsset", [asset.id]);

    const result = await evaluateTransaction("GetAsset", asset.id);

    return JSON.parse(result);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Lock asset.
 *
 * @param id
 * @returns
 */
async function lock(id) {
  try {
    await submitTransaction("LockAsset", [id]);

    const result = await evaluateTransaction("GetAsset", id);

    return JSON.parse(result);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Release asset.
 *
 * @param id
 * @returns
 */
async function release(id) {
  try {
    await submitTransaction("ReleaseAsset", [id]);

    const result = await evaluateTransaction("GetAsset", id);

    return JSON.parse(result);
  } catch (error) {
    throw new Error(error);
  }
}

export default {
  get,
  getById,
  getByOwner,
  getAssetHistory,
  create,
  transfer,
  accept,
  lock,
  release,
};
