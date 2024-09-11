import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../../store/ApiContextProvider";

const DetailBookPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useContext(ApiContext);
  const [item, setItem] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const finder = data?.find((el) => el.slug === slug);
    setItem(finder);
  }, [slug, data]);
  const handleBack = () => {
    nav(-1);
  };
  return (
    <div className=" h-full  flex flex-col">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data ? (
            <div className=" grid grid-cols-2 gap-5 p-7 border-2 border-gray-100 shadow-lg my-auto rounded bg-gray-100">
              <div className="">
                <img src={item?.image} />
              </div>
              <div className=" flex flex-col gap-2">
                <h1 className=" text-xl font-bold text-gray-900 font-sans">
                  {item?.book}
                </h1>
                <h2 className=" text-base font-semibold text-gray-500">
                  {item?.author}
                </h2>

                <p className=" text-base font-medium text-gray-700 line-clamp-3 ">
                  {item?.description}
                </p>
                <button
                  onClick={handleBack}
                  className=" border border-gray-700 bg-gray-700 mt-auto self-end text-gray-50  px-6 py-2 rounded-lg"
                >
                  Back
                </button>
              </div>
            </div>
          ) : (
            <h1>{error}</h1>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
