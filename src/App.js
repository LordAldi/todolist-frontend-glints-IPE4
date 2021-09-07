import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verification from "./pages/Verification";

import "./styles/index.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/verification">
          <Verification />
        </Route>
        <Route path="/forget-password">
          <ForgetPassword />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
