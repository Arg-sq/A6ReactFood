import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { JWT_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log("email-->", email, "pass->", password);
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const response = await axios.post(JWT_URL, {
        email: email,
        password: password,
      });
      localStorage.setItem("JWT_token", JSON.stringify(response.data));
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
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
          <input
            id="Input"
            type="email"
            placeholder="enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            id="Input"
            type="password"
            placeholder="enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <button type="submit" onClick={signIn}>
            {" "}
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
