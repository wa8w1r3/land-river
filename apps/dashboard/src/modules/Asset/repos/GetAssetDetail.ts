import ky from "ky";
import { Asset } from "../Asset.types";

/**
 * Get asset detail.
 *
 */
async function getAssetDetail(id: string): Promise<Asset> {
  return await ky.get(`http://localhost:8080/assets/${id}`).json();
}

export default getAssetDetail;
