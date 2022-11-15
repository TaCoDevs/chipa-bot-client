import React from "react";
import Head from "next/head";

import Context from "../src/common/hooks/Context"

const App = () => {
  const { theme } = Context()
  return (
    <>
      <Head>
        <title>Chipa-bot</title>
      </Head>
      <div className={`${theme} app`}>
        index
      </div>
    </>
  );
};

export default App;
