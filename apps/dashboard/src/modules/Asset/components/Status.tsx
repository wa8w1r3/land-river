import { FC } from "react";
import { AssetStatus } from "../Types";

interface Props {
  status: AssetStatus;
}

const Status: FC<Props> = ({ status }) => {
  const renderStatus = () => {
    switch (status) {
      case AssetStatus.OWNED:
        return (
          <>
            <span className="bg-primary font-semibold text-center leading-4 rounded-xl py-1 px-3 text-sm text-white">
              Owned
            </span>
          </>
        );
      case AssetStatus.REGISTERED:
        return (
          <>
            <span className="bg-slate-500 font-semibold text-center leading-4 rounded-xl py-1 px-3 text-sm text-white">
              Registered
            </span>
          </>
        );
      case AssetStatus.TRANSFER_PENDING:
        return (
          <>
            <span className="bg-amber-500 font-semibold text-center leading-4 rounded-xl py-1 px-3 text-sm text-white">
              Transfer Pending
            </span>
          </>
        );
      default:
        return (
          <>
            <span className="bg-red-500 font-semibold text-center leading-4 rounded-xl py-1 px-3 text-sm text-white">
              Locked
            </span>
          </>
        );
    }
  };
  return (
    <div className="flex flex-col items-center gap-1">{renderStatus()}</div>
  );
};

export default Status;
