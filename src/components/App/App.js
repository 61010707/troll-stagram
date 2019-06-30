import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppBar, themes, reset } from "react95";
import "./App.css";
import TrollWindow from "../TrollWindow/TrollWindow";
const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <TrollWindow />
      <ThemeProvider theme={themes.default}>
        <AppBar className="appBars"> </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default App;
