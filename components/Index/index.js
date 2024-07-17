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
        <h1>NEXT-CHROME-STARTER</h1>
        <p>
          This is an example of a Browser Extension built with NEXT.JS. Please
          refer to the GitHub repo for running instructions and documentation
        </p>
        <h1>Index Page ./components/Index/index.js</h1>
        <p>{currentUrl}</p>
        <p onClick={() => navigateToPage("new")}>{"Go to New Page >"}</p>
      </main>
    </div>
  );
}
