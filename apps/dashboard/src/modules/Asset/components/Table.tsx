import { ReactElement } from "react";
import { Asset, AssetStatus } from "../Asset.types";
import Status from "./Status";

interface Props {
  assets: Asset[];
  onClick(): void;
}

const Table = ({ assets, onClick }: Props): ReactElement => {
  return (
    <table className="table-auto">
      <thead>
        <tr className="font-medium border-b-2">
          <td className="p-4">ID</td>
          <td>Owner</td>
          <td>Location</td>
          <td>Size</td>
          <td className="text-center">Status</td>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr
            key={asset.id}
            className="cursor-pointer hover:bg-slate-50"
            onClick={onClick}
          >
            <td className="p-2">{asset.id}</td>
            <td>{asset.owner}</td>
            <td>{asset.location}</td>
            <td>{asset.size} m2</td>
            <td className="text-center">
              <Status status={asset.status as AssetStatus} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
