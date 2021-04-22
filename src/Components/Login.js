import React, { useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom";

export function Login({ user }) {
  const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(["jwt"]);

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userData, setUserData] = useState([]);

  const handleLogin = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

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
      user.auth = true;
      user.fullName = res.fullName;
      user.email = res.email;
      user.avatar = res.avatar;
    }
  }

  async function login(data) {
    const response = await fetch("http://localhost:8000/auth", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      let jwt = await response.json();
      console.log(jwt);
      setCookieJWT("jwt", jwt);
    }
  }

  const handleSubmit = (event) => {
    const inputData = { email, password };
    login(inputData);
    console.log(inputData);
    history.push("/profile");
    event.preventDefault();
  };

  return (
    <div class="row">
      <form class="col s4 offset-s4" onSubmit={handleSubmit}>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              class="validate"
              value={email}
              onChange={handleLogin}
            />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              class="validate"
              value={password}
              onChange={handlePassword}
            />
            <label for="password">Password</label>
          </div>
        </div>
        <button
          class="btn waves-effect right"
          type="submit"
          name="action"
          style={{ backgroundColor: "#ee6e73" }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
