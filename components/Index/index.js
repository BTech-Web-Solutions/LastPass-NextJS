import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/appContext";

export default function Index({ navigateToPage }) {
  const { currentUrl, setCurrentUrl } = useContext(AppContext);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      setCurrentUrl(activeTab.url);

      const setEmail = "emailtest@test.com";
      const setPass = "PASSWORDTEST.COM";

      chrome.tabs.sendMessage(
        activeTab.id,
        {
          action: "setFormValues",
          email: setEmail,
          password: setPass,
        },
        (response) => {
          if (response && response.success) {
            setOk(true);
          }
        }
      );
    });
  }, [setCurrentUrl]);

  return (
    <div>
      <main>
        <h1 className="font-semibold text-3xl">Current URL:</h1>
        <p className="font-semibold text-xl">{currentUrl}</p>
        {ok && <h1 className="font-semibold text-2xl text-red-600">OK</h1>}
        <p onClick={() => navigateToPage("new")}>{"Go to New Page >"}</p>
      </main>
    </div>
  );
}
