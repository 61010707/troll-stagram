import React from "react";
import { ThemeProvider } from "styled-components";
import { Window, themes, WindowContent, WindowHeader } from "react95";
import "./TrollWindow.css";
import TrollHeader from "../TrollHeader/TrollHeader.js";
import TrollView from "../TrollView/TrollView.js";
import TrollFooter from "../TrollFooter/TrollFooter.js";
import TrollProfile from "../TrollProfile/TrollProfile";
import TrollGrid from "../TrollGrid/TrollGrid.js";
const TrollWindow = () => {
  return (
    <div className="bodytTroll">
      <ThemeProvider theme={themes.default}>
        <Window
          className="mainWindow"
          style={{
            paddingLeft: "135px",
            paddingRight: "135px"
          }}
        >
          <WindowHeader>
            <TrollHeader />
          </WindowHeader>
          <div className="mainContain">
            <WindowContent
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                height: "680px"
              }}
            >
              <TrollProfile />
              <TrollView />

              <div style={{ backgroundColor: "teal", height: "295px" }}>
                <TrollGrid />
              </div>
              <TrollFooter />
              <h1 className="coppy">Copyright @ Time Fai Zil</h1>
            </WindowContent>
          </div>
        </Window>
      </ThemeProvider>
    </div>
  );
};

export default TrollWindow;
