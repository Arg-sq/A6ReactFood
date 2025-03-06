import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          background: "#ddd",
          padding: "20px",
          borderRadius: "8px",
          gap: "8px",
        }}
      >
        <div>
          <label>Email:</label>
          <input id="Input" placeholder="enter your email"></input>
        </div>
        <div>
          <label>Password:</label>
          <input id="Input" placeholder="enter your password"></input>
        </div>
      </div>
    </>
  );
};

export default Login;
