import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="">
        <Link to="/login">Login</Link>
      </div>
      <div className="">
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Home;
