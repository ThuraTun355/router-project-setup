import React, { useEffect, useState } from "react";

const useFetch = (fetchFun, arg) => {
  const [fetchData, setFetchData] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setFetchData((prev) => {
          return {
            loading: false,
            data: data,
            error: null,
          };
        });
      } catch (e) {
        setFetchData((prev) => {
          return {
            loading: false,
            data: null,
            error: e.message,
          };
        });
      }
    })();
  }, []);
  return fetchData;
};

export default useFetch;
