import React from "react";
import { Toolbar, Button, Divider } from "react95";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderNone,
  faList,
  faMapMarkerAlt,
  faUserTag
} from "@fortawesome/free-solid-svg-icons";
import "../TrollView/TrollView.css";
const TrollView = () => {
  return (
    <div className="ToolBars">
      <Divider />
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div className="one">
          <Button className="footerToolbar">
            {" "}
            <FontAwesomeIcon icon={faBorderNone} />
          </Button>
        </div>
        <div className="two">
          <Button className="footerToolbar">
            {" "}
            <FontAwesomeIcon icon={faList} />
          </Button>
        </div>
        <div className="three">
          <Button className="footerToolbar">
            {" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </Button>
        </div>
        <div className="four">
          <Button className="footerToolbar">
            {" "}
            <FontAwesomeIcon icon={faUserTag} />
          </Button>
        </div>
      </Toolbar>
    </div>
  );
};

export default TrollView;
