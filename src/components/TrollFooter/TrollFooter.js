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
import "../TrollFooter/TrollFooter.css";
const TrollFooter = () => {
  return (
    <div>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div class="ones">
        <Button className="footerButton">
          {" "}
          <FontAwesomeIcon icon={faHome} />
        </Button>
        </div>
        <div class="twos">
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        </div>
        <div class="threes">
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faCamera} />
        </Button>
        </div>
        <div class="fours">
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faHeart} />
        </Button>
        </div>
        <div class="fives">
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faUserAlt} />
        </Button>
        </div>
      </Toolbar>
    </div>
  );
};

export default TrollFooter;
