import { FC, useCallback, useEffect, useState } from "react";
import { DocumentIcon, HomeIcon, LoadingIcon } from "../../../components";
import { Table } from "../components";
import { getAssets } from "../repos";
import { Asset } from "../Types";

const List: FC = () => {
  const [assets, setAssets] = useState<Asset[]>();
  // const [createModal, setCreateModal] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const data = await getAssets();
      setAssets(data);
    } catch (error) {
      const err = await error;
      alert(err.message);
    }
  }, []);

  // TODO move create form to new page
  // const onCreateClose = useCallback(() => {
  //   setCreateModal(false);
  // }, []);

  // const onCreateAsset = useCallback(async (data: Asset) => {
  //   try {
  //     await createAsset(data);
  //     fetchData();
  //   } catch (error) {
  //     alert(await error.message);
  //   }
  //   onCreateClose();
  // }, []);

  return (
    <div className="flex flex-col w-2/3 h-full mt-8 gap-8 z-10">
      <section className="flex-col text-white">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <h3 className="font-medium">
          Hi Admin! Welcome back to the Land River dashboard.
        </h3>
      </section>
      <section className="flex w-full gap-4">
        <div className="flex flex-col gap-4 p-4 flex-none w-3/4 rounded-md shadow-md bg-white">
          <div className="flex px-2">
            <h2 className="text-lg font-medium">Asset List</h2>
            <button
              className="ml-auto max-w-fit inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-dark"
              // onClick={() => setCreateModal(true)}
            >
              Create Asset
            </button>
          </div>
          {assets && assets.length > 0 ? (
            <Table assets={assets} onClick={() => null} />
          ) : (
            <h2 className="mt-4">
              No assets registered. Please create a new asset.
            </h2>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex rounded-md shadow-md bg-amber-600 text-white p-4 gap-4">
            <HomeIcon className="w-10 fill-white" />
            <div>
              <h1 className="text-2xl font-bold">2500</h1>
              <h4>Assets Registered</h4>
            </div>
          </div>
          <div className="flex rounded-md shadow-md bg-blue-600 text-white p-4 gap-4">
            <DocumentIcon className="w-10" />
            <div>
              <h1 className="text-2xl font-bold">150</h1>
              <h4>Transactions</h4>
            </div>
          </div>
          <div className="flex rounded-md shadow-md bg-rose-600 text-white p-4 gap-4">
            <LoadingIcon className="w-10 motion-safe:animate-pulse fill-white" />
            <div>
              <h1 className="text-2xl font-bold">15</h1>
              <h4>Pending Transfer</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List;
