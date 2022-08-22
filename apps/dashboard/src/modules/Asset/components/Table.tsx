import { ReactElement } from "react";
import { Asset, AssetStatus, TxHistory } from "../Asset.types";
import Status from "./Status";

interface Props {
  assets?: Asset[];
  histories?: TxHistory[];
  onClick?(id: string): void;
}

const Table = ({ assets, histories, onClick }: Props): ReactElement => {
  return (
    <table className="table-auto">
      <thead>
        <tr className="font-medium border-b-2">
          <td className="py-2">{assets ? "ID" : "Transaction ID"}</td>
          <td>Owner</td>
          <td>{assets ? "Location" : "Date"}</td>
          {assets && <td>Size</td>}
          <td className="text-center">Status</td>
        </tr>
      </thead>
      <tbody>
        {assets &&
          assets.map((asset) => (
            <tr
              key={asset.id}
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => onClick && onClick(asset.id)}
            >
              <td className="py-2">{asset.id}</td>
              <td>{asset.owner}</td>
              <td>{asset.location}</td>
              <td>{asset.size} m2</td>
              <td className="text-center">
                <Status status={asset.status as AssetStatus} />
              </td>
            </tr>
          ))}
        {histories &&
          histories.map((history) => (
            <tr key={history.txId} className="cursor-pointer hover:bg-slate-50">
              <td className="p-2 text-sm">{history.txId}</td>
              <td>{history.value.owner}</td>
              <td>
                {new Date(
                  parseInt(history.timestamp.seconds) * 1000,
                ).toLocaleDateString()}
              </td>
              <td className="text-center">
                <Status status={history.value.status as AssetStatus} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
