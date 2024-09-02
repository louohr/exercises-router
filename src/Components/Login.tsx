import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onLogin();
    navigate("protected");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLoginClick}>Log In</button>
    </div>
  );
};

export default Login;
