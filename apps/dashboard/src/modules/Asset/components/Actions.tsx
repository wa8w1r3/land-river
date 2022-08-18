import { FC } from "react";
import { AssetStatus } from "../Asset.types";

interface Props {
  status: AssetStatus;
  onClick(): void;
}

const Actions: FC<Props> = ({ status, onClick }) => {
  const renderActions = () => {
    switch (status) {
      case AssetStatus.OWNED:
        return (
          <button
            className="ml-auto max-w-fit inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-rose-600 border border-transparent rounded-md hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-700"
            onClick={onClick}
          >
            Lock Asset
          </button>
        );
      case AssetStatus.LOCKED:
        return (
          <button
            className="ml-auto max-w-fit inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-700"
            onClick={onClick}
          >
            Release Asset
          </button>
        );
      default:
        return <></>;
    }
  };
  return renderActions();
};

export default Actions;
