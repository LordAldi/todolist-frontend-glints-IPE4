import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import useAuth, { AuthProvider } from "./hooks/authContext";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verification from "./pages/Verification";

import "./styles/index.scss";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        (auth && auth.email === "") || auth.nama === "" ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute path="/" component={Home} exact />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
