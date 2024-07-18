import React, { useState } from "react";
import AppContext from "./appContext";

function AppProvider({ children }) {
  const [currentUrl, setCurrentUrl] = useState("");

  const contextValue = {
    currentUrl,
    setCurrentUrl,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
