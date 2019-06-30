import React from "react";
import { Button } from "react95";
import "../TrollProfile/TrollProfile.css";

const TrollProfile = () => {
  return (
    <div class="CONDIS">
      <div class="Logo">
        <h1>Trollstagram </h1>
      </div>
      <div class="imgdisplay">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ee38b4e-1ad8-433e-b83b-5f1492547b2d/d3a4k16-486f7e33-afd1-4d1d-a573-ff3d9ea74e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJlZTM4YjRlLTFhZDgtNDMzZS1iODNiLTVmMTQ5MjU0N2IyZFwvZDNhNGsxNi00ODZmN2UzMy1hZmQxLTRkMWQtYTU3My1mZjNkOWVhNzRlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dr84VbvqNLBdJucinb4Cr8eB-IHmxHk5_nuIxqvySg4"
          style={{ width: 120 }}
          alt="avata"
        />
      </div>

      <div class="textPost">
        <h1 class="b"> 60</h1> <br />
        <h1>Post</h1>
      </div>
      <div class="textFollows">
        <h1 class="b">11.1k</h1> <br />
        <h1>Follows</h1>
      </div>
      <div class="textFollowing">
        <h1 class="b">3</h1> <br />
        <h1 >Following</h1>
      </div>

      <div class="buttonfow">
        <Button> +Follows</Button>
      </div>

      <div class="textScl">
        <h1 class="b">Wellcome to fucking world</h1> <br />
        <h1>@ribway</h1>
      </div>
    </div>
  );
};

export default TrollProfile;
