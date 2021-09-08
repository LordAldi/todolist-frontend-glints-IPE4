import { Form, Formik } from "formik";
import React from "react";
import AuthLeft from "../components/AuthLeft";
import TextField from "../components/TextField";

const VerificationForm = ({ onSubmit }) => {
  return (
    <Form>
      <TextField
        name="email"
        label="Please enter the code we sent to
abc***@gmail.com"
        placeholder="OTP"
        type="text"
      />
      <div className="button" onClick={onSubmit}>
        Confirm
      </div>
      <p className="resend">
        Didn’t receive yet? <span>Resend</span>
      </p>
    </Form>
  );
};

const initialValues = {
  otp: "",
};
const Verification = () => {
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
          <h1 className="title">Verification</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <VerificationForm onSubmit={handleSubmit} />}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Verification;
