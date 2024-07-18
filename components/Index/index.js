import { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/appContext";

export default function Index({ navigateToPage }) {
  const { currentUrl, setCurrentUrl } = useContext(AppContext);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      setCurrentUrl(activeTab.url);
    });
  }, []);

  return (
    <div>
      <main>
        <h1 className="font-semibold text-3xl">Current URL:</h1>

        <p className="font-semibold text-xl">{currentUrl}</p>
        <p onClick={() => navigateToPage("new")}>{"Go to New Page >"}</p>
      </main>
    </div>
  );
}
