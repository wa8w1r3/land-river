import { useFormik } from "formik";
import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input, LoadingIcon } from "../../../components";
import { Asset, AssetStatus, Transfer } from "../Asset.types";
import { Actions, Status } from "../components";
import { getAssetDetail, transferAsset } from "../repos";

const Detail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [asset, setAsset] = useState<Asset>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    if (id) fetchData(id);
    else navigate("/");
  }, [id]);

  const fetchData = useCallback(async (_id: string) => {
    try {
      const data = await getAssetDetail(_id);

      setAsset(data);
    } catch (error) {
      const err = await error;
      alert(err.message);
    }
  }, []);

  const handleAction = useCallback(() => {
    // handle lock and release asset
  }, []);

  const formik = useFormik({
    initialValues: {
      id: id,
      owner: "",
    },
    onSubmit: (values) => {
      if (values.owner !== "") {
        setLoading(true);
        handleTransfer(values as Transfer);
      }
    },
    validateOnChange: true,
    enableReinitialize: true,
  });

  const handleTransfer = async (_asset: Transfer) => {
    try {
      await transferAsset({ id: _asset.id, owner: _asset.owner });
      setTimeout(() => {
        formik.resetForm();
        setLoading(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      const err = await error;
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col w-2/3 h-full mt-8 gap-8 z-10">
      <section className="flex-col text-white">
        <h1 className="text-3xl font-bold">Asset Detail</h1>
      </section>
      {asset && (
        <section className="flex w-full gap-4">
          <div className="flex flex-col gap-4 p-4 flex-none w-1/2 rounded-md shadow-md bg-white">
            <div className="flex">
              <h2 className="text-lg font-medium mr-auto">
                Asset ID: {asset.id}
              </h2>
              <Status status={asset.status as AssetStatus} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">Owned by</span>
                <span>{asset.owner}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Location</span>
                <span>{asset.location}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Size</span>
                <span>{asset.size} m2</span>
              </div>
            </div>
            <Actions
              status={asset.status as AssetStatus}
              onClick={handleAction}
            />
            {asset.status === AssetStatus.OWNED && (
              <div className="flex pt-4 border-t-2">
                <Input
                  name="owner"
                  title="Transfer to"
                  placeholder="Input new owner"
                  value={formik.values.owner}
                  onChange={formik.handleChange}
                />
                <button
                  className="ml-auto max-w-fit inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-amber-600 border border-transparent rounded-md hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-700"
                  onClick={() => formik.handleSubmit()}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <LoadingIcon className="animate-spin w-5 fill-white mr-2" />
                      Please wait..
                    </>
                  ) : (
                    "Transfer Asset"
                  )}
                </button>
              </div>
            )}
          </div>
          <iframe
            className="h-full max-h-screen xl:min-w-[30rem] lg:min-w-[25rem] md:min-w-[20rem] shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5613.513741277526!2d-79.41348504077459!3d43.67592552614158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1655441998679!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            tabIndex={0}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      )}
    </div>
  );
};

export default Detail;
