import { FC, memo } from "react";
import { HomeIcon } from "../../../components";
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
            <HomeIcon className="stroke-green-600" />
            <span className="text-green-600 font-semibold text-center leading-4 text-sm">
              {AssetStatus.OWNED}
            </span>
          </>
        );

      case AssetStatus.REGISTERED:
        return (
          <>
            <HomeIcon className="stroke-slate-600" />
            <span className="text-slate-600 font-semibold text-center leading-4 text-sm">
              {AssetStatus.REGISTERED}
            </span>
          </>
        );

      default:
        return (
          <>
            <HomeIcon className="stroke-red-600" />
            <span className="text-red-600 font-semibold text-center leading-4 text-sm">
              {AssetStatus.LOCKED}
            </span>
          </>
        );
    }
  };
  return (
    <div className="flex flex-col items-center gap-1">{renderStatus()}</div>
  );
};

export default memo(Status);
