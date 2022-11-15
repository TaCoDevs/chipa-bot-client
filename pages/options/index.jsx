import React, { useEffect } from "react";
import Head from "next/head";
import useAppContext from "../../src/common/hooks/Context";

const App = () => {
  const { state, setState } = useAppContext();
  const { isBlackTheme, lang } = state;

  function saveConfig() {
    const lang = document.getElementById("lang").value;
    const theme = document.getElementById("theme").checked;

    const config = { isBlackTheme: theme, lang };

    localStorage.setItem("customConfig", JSON.stringify(config));
    setState(config);
  }

  useEffect(() => {
    const theme = document.getElementById("theme")
    theme.addEventListener("click", () => {
      let isChecked = theme.checked
      
      setState({ ...state, isBlackTheme: isChecked })
    })
  })

  return (
    <>
      <Head>
        <title>Chipa-bot | Options</title>
      </Head>
      <div className="app">
        <h3>Web Options</h3>
        <div>
          <span>Theme</span>
          <input
            type="checkbox"
            name="theme"
            defaultChecked={isBlackTheme}
            id="theme"
          />
        </div>
        <div>
          <span>language</span>
          <select name="lang" id="lang">
            <option value="en_us">En/Us</option>
            <option value="es_mx">Es/Mx</option>
          </select>
        </div>
        <div>
          <button onClick={saveConfig}>Save</button>
        </div>
      </div>
    </>
  );
};

export default App;
