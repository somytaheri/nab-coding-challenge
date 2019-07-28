import React from "react";

import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>NAB coding Challenge.</p>
      </header>
    </div>
  );
}

export default Header;
