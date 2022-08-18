import ky from "ky";
import { Asset } from "../Asset.types";

/**
 * Get all asset.
 *
 * @returns assets
 */
async function getAssets(): Promise<Asset[]> {
  return await ky.get(`http://localhost:8080/assets`).json();
}

export default getAssets;
