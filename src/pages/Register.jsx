import { Form, Formik } from "formik";
import React from "react";
import AuthLeft from "../components/AuthLeft";
import TextField from "../components/TextField";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/authContext";

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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "username must have at least 4 character")
    .required(),
  email: yup.string().email("must a valid email").required("Email is Required"),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "password must contains 8 characters,1 uppercase, 1 lowercase, 1 number, and 1 special char"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const { register } = useAuth();
  const history = useHistory();
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
          <Formik
            initialValues={initialValues}
            onSubmit={(val) => register(val, history)}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => <RegisterForm onSubmit={handleSubmit} />}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
