import React from "react";
import AuthLeft from "../components/AuthLeft";
import BackHome from "../components/BackHome";

const Register = () => {
  return (
    <div className="auth-container">
      <AuthLeft
        title="Hello, Friend!"
        subtitle="If you already have an Account, You can Login"
        btnPath="login"
        btnText="Login"
      />
      <div className="auth-right">
        login <BackHome />
      </div>
    </div>
  );
};

export default Register;
