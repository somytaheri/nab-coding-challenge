import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import logo from "../../assets/logo.png";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "30px"
  },
  appbar: {
    background: "#000"
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appbar}>
        <Toolbar>
          <img src={logo} alt="logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
