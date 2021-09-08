import { Form, Formik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthLeft from "../components/AuthLeft";
import TextField from "../components/TextField";
import useAuth from "../hooks/authContext";

const LoginForm = ({ onSubmit }) => {
  return (
    <Form>
      <TextField
        name="email"
        label="Email"
        placeholder="example@web.com"
        autoComplete="username"
        type="email"
      />
      <TextField
        name="password"
        label="Password"
        placeholder="Password"
        autoComplete="current-password"
        type="password"
      />
      <Link to="/forget-password" className="forget">
        Forget Password?
      </Link>
      <div className="button" onClick={onSubmit}>
        Login
      </div>
    </Form>
  );
};
const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { login } = useAuth();
  const history = useHistory();
  return (
    <div className="auth-container">
      <AuthLeft
        title="Welcome Back"
        subtitle="Enter Your Personal Details, and Start Using Our App"
        btnText="Sign Up"
        btnPath="register"
      />
      <div className="auth-right">
        <div className="form-card">
          <h1 className="title">Login</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(val) => login(val, history)}
          >
            {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
