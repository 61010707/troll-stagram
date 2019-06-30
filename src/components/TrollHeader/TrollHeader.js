import React from "react";
import "./TrollHeader.css";
import { Button } from "react95";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faWindowMaximize,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
const TrollHeader = () => {
  return (
    <div className="headSpan">
      <span>Pra use</span>

      <div className="oneh">
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faWindowMinimize} />
        </Button>
      </div>
      <div className="twoh">
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faWindowMaximize} />
        </Button>
      </div>
      <div className="threeh">
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
    </div>
  );
};

export default TrollHeader;
