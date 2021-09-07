import { Form, Formik } from "formik";
import React from "react";
import AuthLeft from "../components/AuthLeft";
import TextField from "../components/TextField";

const RegisterForm = ({ onSubmit }) => {
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
        name="email"
        label="Email"
        autoComplete="username"
        placeholder="example@web.com"
        type="email"
      />
      <TextField
        name="password"
        label="Password"
        placeholder="Password"
        autoComplete="new-password"
        type="password"
      />
      <TextField
        name="confirmPassword"
        label="Confirm Password"
        autoComplete="new-password"
        placeholder="Confirm Password"
        type="password"
      />
      <div className="button" onClick={onSubmit}>
        Register
      </div>
    </Form>
  );
};
const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="auth-container">
      <AuthLeft
        title="Hello, Friend!"
        subtitle="If you already have an Account, You can Login"
        btnPath="login"
        btnText="Login"
      />
      <div className="auth-right">
        <div className="form-card">
          <h1 className="title">Create an Account</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <RegisterForm onSubmit={handleSubmit} />}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
