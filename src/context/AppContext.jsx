import { createContext, useContext, useState, useEffect } from "react";
import { load, save } from "../utils/storage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [blueprints, setBlueprints] = useState(load("blueprints"));
  const [contracts, setContracts] = useState(load("contracts"));

  useEffect(() => save("blueprints", blueprints), [blueprints]);
  useEffect(() => save("contracts", contracts), [contracts]);

  return (
    <AppContext.Provider value={{ blueprints, setBlueprints, contracts, setContracts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
