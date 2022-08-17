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

export type Transfer = {
  id: string;
  owner: string;
};
