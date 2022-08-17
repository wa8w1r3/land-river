import ky from "ky";

/**
 * Lock asset.
 *
 */
async function lockAsset(id: string): Promise<void> {
  await ky.post(`http://localhost:8080/lock/${id}`).json();
}

export default lockAsset;
