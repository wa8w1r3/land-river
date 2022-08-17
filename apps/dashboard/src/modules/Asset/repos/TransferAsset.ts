import ky from "ky";
import { Transfer } from "../Asset.types";

/**
 * Transfer asset.
 *
 */
async function transferAsset(data: Transfer): Promise<void> {
  await ky.post(`http://localhost:8080/transfer`, { json: data }).json();
}

export default transferAsset;
