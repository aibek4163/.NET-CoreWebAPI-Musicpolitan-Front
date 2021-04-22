import logo from "./logo.svg";
import "./App.css";

import UserProvider from "./UserProvider";
import { Main } from "./Components/Main";
import { Dashboard } from "./Components/Admin/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import UserContext from "./UserContext";

import React, { useState, useEffect, useContext, createContext } from "react";

export const UserDataContext = createContext();
function App() {
  const user = useContext(UserContext);

  const [userData, setuserData] = useState([]);
  return (
    <UserProvider>
      <div>
        <Router>
          <Switch>
            <Route path="/admin">
              <Dashboard />
            </Route>
            <Route path="/">
              <Main currentUser={user} />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
