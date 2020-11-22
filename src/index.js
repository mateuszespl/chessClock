import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./components/GlobalStyle";
import mainTheme from './themes/mainTheme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
    <GlobalStyle/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
