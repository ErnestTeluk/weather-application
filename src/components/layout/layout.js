import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { theme } from "utils/theme/theme";
import { GlobalStyle, SiteWrapper } from "./layout.styled";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <SiteWrapper>{children}</SiteWrapper>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
