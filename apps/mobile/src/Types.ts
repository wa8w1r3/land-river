export enum AssetStatus {
  REGISTERED,
  OWNED,
  LOCKED,
  TRANSFER_PENDING,
}
export type Asset = {
  id: string;
  size: number;
  location: string;
  owner?: string;
  status?: AssetStatus | number;
};

export type TxHistory = {
  txId: string;
  timestamp: {
    seconds: string;
    nanos: number;
  };
  value: Asset;
};
// Mock owner for development purposes
export const OWNER = 'Andy';
