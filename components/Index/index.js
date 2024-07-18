import { useEffect, useState } from "react";

export default function Index({ navigateToPage }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      setCurrentUrl(activeTab.url);
    });
  }, []);

  return (
    <div>
      <main>
        <h1>Current URL:</h1>

        <p>{currentUrl}</p>
        <p onClick={() => navigateToPage("new")}>{"Go to New Page >"}</p>
      </main>
    </div>
  );
}
