import React from "react";
import Axios, { post } from "axios";
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
  const handleChange = e => {
    let files = e.target.files;
    console.log(files);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      console.log("img data", e.target.result);
      const url = "http://1779896c.ngrok.io/user/image";
      const formData = { imageFile: e.target.result };
      return Axios.post(url, formData);
    };
  };
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
        <Button className="footerButton">
          {"  "}
          <FontAwesomeIcon icon={faUserAlt} />
        </Button>
      </Toolbar>
    </div>
  );
};

export default TrollFooter;
