import { Navbar } from "./Header";
import { Banner } from "./Banner";
import { News } from "./News";
import { Reviews } from "./Reviews";
import { TopChart } from "./TopMusic";
import { Footer } from "./Footer";
import { ImgMediaCard } from "./Articles";
import { Login } from "./Login";
import { Register } from "./Registration";
import { Profile } from "./Profile";
import { AdminProfile } from "./Admin/AdminProfile";
import { Dashboard } from "./Admin/Dashboard";
import { NewsDetails } from "./Details";

import { Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../App";

export function Main({ currentUser }) {
  return (
    <div>
      <Navbar user={currentUser} />
      <Switch>
        <Route path="/home">
          <Banner />
          <News />
          <Reviews />
          <TopChart />
          <ImgMediaCard />
        </Route>
        <Route path="/login">
          <Login user={currentUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/adminprofile">
          <AdminProfile />
        </Route>
        <Route path="/details">
          <NewsDetails />
        </Route>
      </Switch>
      <div style={{ minHeight: "300px" }}></div>
      <Footer />
    </div>
  );
}
