import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Window,
  themes,
  reset,
  Toolbar,
  WindowContent,
  WindowHeader
} from "react95";
import "./TrollWindow.css";
import TrollHeader from "../TrollHeader/TrollHeader.js";
const TrollWindow = () => {
  return (
    <div className="bodytTroll">
      <ThemeProvider theme={themes.default}>
        <Window className="mainWindow">
          <WindowHeader>
            <TrollHeader />
          </WindowHeader>
        </Window>
      </ThemeProvider>
    </div>
  );
};

export default TrollWindow;
