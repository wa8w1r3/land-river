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
    return evaluateTransaction("GetAsset", id);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Create new asset.
 *
 * @param assetObject
 * @returns
 */
async function create(assetObject) {
  try {
    const id = uuid();

    await submitTransaction("CreateAsset", [
      id.slice(0, 8),
      assetObject.size,
      assetObject.location,
      assetObject.owner,
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
 * @param transferObject
 * @returns
 */
async function transfer(transferObject) {
  try {
    await submitTransaction("TransferAsset", [
      transferObject.id,
      transferObject.owner,
    ]);

    const result = await evaluateTransaction("GetAsset", transferObject.id);

    return JSON.parse(result);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * hold asset.
 *
 * @param id
 * @returns
 */
async function hold(id) {
  try {
    await submitTransaction("HoldAsset", [id]);
    const result = await evaluateTransaction("GetAsset", id);

    return JSON.parse(result);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Unhold asset.
 *
 * @param id
 * @returns
 */
async function unhold(id) {
  try {
    await submitTransaction("UnHoldAsset", [id]);
    const result = await evaluateTransaction("GetAsset", id);

    return JSON.parse(result);
  } catch (error) {
    throw new Error(error);
  }
}

export default {
  get,
  getById,
  create,
  transfer,
  hold,
  unhold,
};
