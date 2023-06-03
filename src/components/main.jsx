import React, { createContext } from "react";

const MainContext = createContext({});

const defaultState = {
  language: "EN",
  theme: "light",
};

const Main = () => {
  return <MainContext.Provider value={defaultState}></MainContext.Provider>;
};
