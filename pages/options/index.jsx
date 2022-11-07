import React from "react";
import Head from "next/head";

function saveConfig() {
  const theme = document.getElementById("theme").checked
  const lang = document.getElementById("lang")

  console.log(theme, lang)
}

const App = () => {
  return (
    <>
    <Head>
      <title>Chipa-bot | Options</title>
    </Head>
      <div className="app">
        <h3>Web Options</h3>
        <div>
          <span>Theme</span>
          <input type="checkbox" name="theme" value={false} id="theme" />
        </div>
        <div>
          <span>language</span>
          <select name="lang" id="lang">
            <option value="">En/Us</option>
            <option value="">Es/Mx</option>
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
