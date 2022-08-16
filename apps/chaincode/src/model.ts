/*
  SPDX-License-Identifier: Apache-2.0
*/

import { Object, Property } from "fabric-contract-api";

export enum AssetStatus {
  REGISTERED,
  OWNED,
  LOCKED,
  TRANSFER_PENDING,
}

@Object()
export class Asset {
  @Property()
  readonly docType: string = "asset";

  @Property()
  id: string;

  @Property()
  size: number;

  @Property()
  location: string;

  @Property()
  owner?: string;

  @Property()
  status: AssetStatus;

  constructor(id: string, size: number, location: string, owner?: string) {
    this.id = id;
    this.size = size;
    this.location = location;
    this.owner = owner;
    this.status = AssetStatus.OWNED;
  }
}
