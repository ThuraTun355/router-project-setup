import React from "react";
import ApiContextProvider from "./ApiContextProvider";

const Provider = ({ children }) => {
  return <ApiContextProvider>{children}</ApiContextProvider>;
};

export default Provider;
