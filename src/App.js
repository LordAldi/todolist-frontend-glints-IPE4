import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import "./styles/index.scss";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/verification" component={Verification} />
          <Route path="/forget-password" component={ForgetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path={"/Users"} component={Layout(Users)} />
          <Route exact path={"/"} component={Layout(Dashboard)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
