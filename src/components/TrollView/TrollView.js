import React from "react";
import { Toolbar, Button, Divider } from "react95";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderNone,
  faList,
  faMapMarkerAlt,
  faUserTag
} from "@fortawesome/free-solid-svg-icons";

const TrollView = () => {
  return (
    <div className="ToolBars">
      <Divider />
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faBorderNone} />
        </Button>
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faList} />
        </Button>
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Button>
        <Button className="footerToolbar">
          {" "}
          <FontAwesomeIcon icon={faUserTag} />
        </Button>
      </Toolbar>
    </div>
  );
};

export default TrollView;
