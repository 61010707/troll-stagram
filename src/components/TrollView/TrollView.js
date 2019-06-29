import React from "react";
import { Toolbar, Button, Divider } from "react95";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderNone,
  faList,
  faMapMarkerAlt,
  faUserTag
} from "@fortawesome/free-solid-svg-icons";
import "../TrollView/TrollView.css"
const TrollView = () => {
  return (
    <div className="ToolBars">
      <Divider />
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div class="one">
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faBorderNone} />
        </Button>
        </div>
        <div class="two">
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faList} />
        </Button>
        </div>
        <div class="three">
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Button>
        </div>
        <div class="four">
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
