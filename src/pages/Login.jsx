import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import AuthLeft from "../components/AuthLeft";
import TextField from "../components/TextField";

const LoginForm = ({ onSubmit }) => {
  return (
    <Form>
      <TextField
        name="username"
        label="Username"
        placeholder="Username"
        autoComplete="name"
        type="text"
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
  username: "",
  password: "",
};

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
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
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
