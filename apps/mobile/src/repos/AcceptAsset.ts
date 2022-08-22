import ky from 'ky';
import {Asset} from '../Types';

/**
 * Accept and sign asset.
 *
 * @returns assets
 */
async function acceptAsset(id: string): Promise<Asset[]> {
  return await ky.post('http://localhost:8080/accept', {json: {id}}).json();
}

export default acceptAsset;
