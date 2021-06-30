import React from "react";
import { MuiThemeProvider } from "@material-ui/core";

const Footer = () => {
  return (
    <MuiThemeProvider>
      <div className="footer flex flex-middle">
        <div className="flex flex-middle container px-sm-30 w-100">
          Copyright © Orion Sales Canada 2021
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Footer;