import { ReactElement } from "react";
import { Asset } from "../Types";

interface Props {
  assets: Asset[];
}

const Table = ({ assets }: Props): ReactElement => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <td className="p-4">ID</td>
          <td>Owner</td>
          <td>Location</td>
          <td>Size</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr key={asset.id}>
            <td className="p-2">{asset.id}</td>
            <td>{asset.owner}</td>
            <td>{asset.location}</td>
            <td>{asset.size} m2</td>
            <td>{asset.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
