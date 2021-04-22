import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

export function Navbar({ user }) {
  const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(["jwt"]);
  console.log(user);

  const [userData, setData] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [auth, setAuth] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (cookieJWT["jwt"] !== undefined) {
      getUser();
    }
  }, []);

  const Logout = () => {
    removeCookieJWT("jwt");
    setAuth(false);
    setFullName("");
    setEmail("");
    setAvatar("");
    user.auth = false;
    history.push("/login");
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
      setData(res);
      setFullName(res.fullName);
      setEmail(res.email);
      setAvatar(res.avatar);
      setAuth(true);
    }
  }

  return (
    <>
      <nav class="nav-extended">
        <div class="main_wrapper">
          <div class="nav-wrapper">
            <Link to="/home" class="brand-logo center logo">
              MUSICPOLITAN
            </Link>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <Link to="#">
                  <i class="fas fa-search"></i>
                </Link>
              </li>
              {auth === true ? (
                <>
                  <li>
                    <Link to="/profile">
                      <span>{fullName}</span>
                    </Link>
                  </li>
                  <li>
                    <span onClick={Logout}>
                      <i class="fas fa-sign-out-alt"></i>
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">
                      <i class="fas fa-sign-in-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <i class="fas fa-user-plus"></i>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul id="nav-mobile" class=" right hide-on-med-and-down ">
              <li>
                <a href="#">
                  <i class="fab fa-telegram-plane"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-vk"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent ">
              <div class="flexbox">
                <li class="tab ">
                  <a href="#test1">News</a>
                </li>
                <li class="tab">
                  <a href="#test2">Releases</a>
                </li>
                <li class="tab">
                  <a href="#test3">Top 10</a>
                </li>
                <li class="tab">
                  <a href="#test4">Reviews</a>
                </li>
                <li class="tab">
                  <a href="#test4">Articles</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
