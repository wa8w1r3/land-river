import ky from 'ky';
import {Asset} from '../Types';

/**
 * Get all assets by owner.
 *
 * @returns assets
 */
async function getAssets(owner: string): Promise<Asset[]> {
  return await ky.get(`http://localhost:8080/assets/owner/${owner}`).json();
}

export default getAssets;
