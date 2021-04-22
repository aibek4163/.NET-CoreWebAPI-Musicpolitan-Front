import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";

function Avatar({ avatar }) {
  return (
    <div className="main_wrapper">
      <div className="col s3">
        <img class="responsive-img" src={avatar} alt="" />
        <form action="#">
          <div class="file-field input-field">
            <div class="btn" style={{ backgroundColor: "#ee6e73" }}>
              <span>File</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
          <button
            class="btn waves-effect right"
            type="submit"
            name="action"
            style={{ backgroundColor: "#ee6e73" }}
          >
            UPLOAD
          </button>
        </form>
      </div>
    </div>
  );
}

function EditProfile({ email, fullName }) {
  return (
    <form class="col s4 offset-s1">
      <div class="row">
        <div class="input-field col s12">
          <input
            id="email"
            type="email"
            class="validate"
            readOnly
            value={email}
          />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="fullName" type="text" class="validate" value={fullName} />
          <label for="fullName">Full Name</label>
        </div>
      </div>
      <button
        class="btn waves-effect right"
        type="submit"
        name="action"
        style={{ backgroundColor: "#ee6e73" }}
      >
        Edit
      </button>
    </form>
  );
}

function ChangePassword(props) {
  return (
    <>
      <div className="main_wrapper">
        <div className="col s3"></div>
      </div>
      <form class="col s4 offset-s1">
        <div class="row">
          <div class="input-field col s12">
            <input id="old_password" type="password" class="validate" />
            <label for="password">Old Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="new_password" type="password" class="validate" />
            <label for="new_password">New Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="repassword" type="password" class="validate" />
            <label for="repassword">Repeat New Password</label>
          </div>
        </div>
        <button
          class="btn waves-effect right"
          type="submit"
          name="action"
          style={{ backgroundColor: "#ee6e73" }}
        >
          Change Password
        </button>
      </form>
    </>
  );
}

export function Profile() {
  const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(["jwt"]);
  console.log(cookieJWT["jwt"]);

  const [userData, setData] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  async function getUser() {
    const bearer = "Bearer " + cookieJWT["jwt"].jwtToken;

    const response = await fetch("http://localhost:8000/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    });

    if (response.status === 200) {
      let res = await response.json();
      console.log(res);
      setData(res);
      setFullName(res.fullName);
      setEmail(res.email);
      setAvatar(res.avatar);
    }
  }

  useEffect(() => {
    if (cookieJWT["jwt"] !== undefined) {
      getUser();
    }
  }, []);
  return (
    <>
      <div className="row">
        <Avatar avatar={avatar} />
        <EditProfile email={email} fullName={fullName} />
      </div>
      <div className="row">
        <ChangePassword />
      </div>
    </>
  );
}
