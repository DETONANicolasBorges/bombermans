import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container } from "@mui/material";

const Header = () => {
  return (
    <HeaderAppBar position="sticky">
      <Toolbar component={Container}>
        <HeaderLogo src="/img/logos/and1.svg" alt="bombermans" />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
