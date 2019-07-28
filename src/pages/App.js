import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../components/Header";
import Panel from "../components/Panel";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Panel />
    </React.Fragment>
  );
}

export default App;
