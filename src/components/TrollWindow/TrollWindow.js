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
import TrollProfile from "../TrollProfile/TrollProfile";
import { black } from "ansi-colors";
const TrollWindow = () => {
  return (
    <div className="bodytTroll">
      <ThemeProvider theme={themes.default}>
        <Window className="mainWindow"  style={{
              paddingLeft: "120px",
              paddingRight: "120px"
            }}>
        
          <WindowHeader>
            <TrollHeader />
          </WindowHeader>
          <div className="mainContain">
            <WindowContent style={{ borderWidth: "2px", borderStyle: "solid" }}>
              <TrollProfile />
              <TrollView />
              <div style={{  height: "50vh" }} />

              <TrollFooter />
            </WindowContent>
          </div>
        </Window>
      </ThemeProvider>
    </div>
  );
};

export default TrollWindow;
