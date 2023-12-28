// import React from "react";

import { useNavigate } from "react-router-dom";

export const LoginPages = () => {
  const navigator = useNavigate();

  const onLogin = () => {
    navigator("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="" onClick={onLogin}>
        Login Heroes App
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
