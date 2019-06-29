import React from "react";
import { Toolbar, Button } from "react95";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faCamera,
  faHeart,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";
const TrollFooter = () => {
  return (
    <div>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Button className="footerButton">
          {" "}
          <FontAwesomeIcon icon={faHome} />
        </Button>
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faCamera} />
        </Button>
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faHeart} />
        </Button>
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faUserAlt} />
        </Button>
      </Toolbar>
    </div>
  );
};

export default TrollFooter;
