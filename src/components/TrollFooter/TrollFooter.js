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
      url: "http://02a7dd8e.ngrok.io/user/image",
      method: "POST",

      data: formData
    })
      .then(window.location.reload())
      .then(
        res => {
          console.log(res);
          document.getElementById("submit-form").click();
        },
        err => {
          console.log(err);
          document.getElementById("submit-form").click();
        }
      );
  };
  return (
    <div>
      <form>
        {" "}
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
          <div class="fives">
            <Button className="footerButton">
              {"  "}
              <FontAwesomeIcon icon={faUserAlt} />
            </Button>
          </div>
        </Toolbar>
        <button
          type="submit"
          id="submit-form"
          style={{ display: "none" }}
          onClick={console.log("submit")}
        />
      </form>
    </div>
  );
};

export default TrollFooter;
