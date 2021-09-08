import React from "react";
import { Link } from "react-router-dom";

const AuthLeft = ({ title, subtitle, btnText, btnPath }) => {
  return (
    <div className="auth-left">
      <div className="auth-left-content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <div className="button-container">
          <Link to={`/${btnPath}`} className="button">
            {btnText}
          </Link>
        </div>
      </div>
      <Link to="/verification">go to Verification</Link>
      <Link to="/">go to home</Link>
    </div>
  );
};

export default AuthLeft;
