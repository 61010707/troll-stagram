import React from "react";
import Axios from "axios";
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
  const handleChange = e => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imageFile", file);
    Axios({
      url: "http://218c4cfb.ngrok.io/user/image",
      method: "POST",
      data: formData
    }).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  };
  return (
    <div>
      {" "}
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div className="ones">
          <Button className="footerButton">
            {" "}
            <FontAwesomeIcon icon={faHome} />
          </Button>
        </div>
        <div className="twos">
          <Button className="footerButton">
            {"  "}
            <FontAwesomeIcon icon={faSearch} />
          </Button>

          <Button
            className="footerButton"
            type="file"
            name="file"
            onClick={() => {
              document.getElementById("file-input").click();
            }}
          >
            <FontAwesomeIcon icon={faCamera} />
          </Button>
          <input
            id="file-input"
            type="file"
            name="file"
            style={{ display: "none" }}
            onChange={handleChange}
          />

          <Button className="footerButton">
            {"  "}
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </div>
        <div className="fives">
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
