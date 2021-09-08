import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import useAuth, { AuthProvider } from "./hooks/authContext";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import "./styles/index.scss";
import Layout from "./components/Layout";

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
          <Route path="/verification" component={Verification} />
          <Route path="/forget-password" component={ForgetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path={"/Users"} component={Layout(Users)} />
          <PrivateRoute exact path={"/"} component={Layout(Dashboard)} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
