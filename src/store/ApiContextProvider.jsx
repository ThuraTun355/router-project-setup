import React, { createContext } from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";

export const ApiContext = createContext({
  loading: true,
  data: null,
  error: null,
});

const ApiContextProvider = ({ children }) => {
  const { loading, data, error } = useFetch(GetBookData, "/books");

  return (
    <ApiContext.Provider value={{ loading, data, error }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
