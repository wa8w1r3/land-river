import { FC, useCallback, useEffect, useState } from "react";
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
        <div className="flex flex-col gap-4 p-4 w-3/4 rounded-md shadow-md bg-white">
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
      </section>
    </div>
  );
};

export default List;
