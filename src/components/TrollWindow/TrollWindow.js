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
import TrollView from "../TrollView/TrollView.js";
import TrollFooter from "../TrollFooter/TrollFooter.js";
const TrollWindow = () => {
  return (
    <div className="bodytTroll">
      <ThemeProvider theme={themes.default}>
        <Window className="mainWindow">
          <WindowHeader>
            <TrollHeader />
          </WindowHeader>
          <div
            className="mainContain"
            style={{
              paddingLeft: "120px",
              paddingRight: "120px"
            }}
          >
            <WindowContent style={{ borderWidth: "2px", borderStyle: "solid" }}>
              <TrollView />
              <div style={{ height: "430px" }} />
              <TrollFooter />
            </WindowContent>
          </div>
        </Window>
      </ThemeProvider>
    </div>
  );
};

export default TrollWindow;
