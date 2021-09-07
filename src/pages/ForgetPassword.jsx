import { Form, Formik } from "formik";
import React from "react";
import AuthLeft from "../components/AuthLeft";
import TextField from "../components/TextField";
import ForgetImage from "../assets/image/forgot.png";
import * as yup from "yup";

const ForgetPasswordForm = ({ onSubmit }) => {
  return (
    <Form>
      <TextField
        name="email"
        label="Please enter your email to receive OTP"
        autoComplete="username"
        placeholder="example@web.com"
        type="email"
      />
      <div className="button" onClick={onSubmit}>
        Send
      </div>
    </Form>
  );
};

const initialValues = {
  email: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email("must a valid email").required("Email is Required"),
});
const ForgetPassword = () => {
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
          <h1 className="title">Forget Password</h1>
          <div className="forgetImg">
            <img src={ForgetImage} alt="forget" />
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <ForgetPasswordForm onSubmit={handleSubmit} />
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
