import ky from "ky";
import { TxHistory } from "../Asset.types";

/**
 * Get asset transaction history.
 *
 */
async function getAssetHistory(id: string): Promise<TxHistory[]> {
  return await ky.get(`http://localhost:8080/history/${id}`).json();
}

export default getAssetHistory;
