import React from "react";
import AuthLeft from "../components/AuthLeft";

const Login = () => {
  return (
    <div className="auth-container">
      <AuthLeft
        title="Welcome Back"
        subtitle="Enter Your Personal Details, and Start Using Our App"
        btnText="Sign Up"
        btnPath="register"
      />
      <div className="auth-right">
        <div className="modal"></div>
      </div>
    </div>
  );
};

export default Login;
