import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = {
  name: "sanu",
  password: "pass123",
};
function AdminLogin() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (name !== Admin.name) {
      alert("Incorrect username!");
    } else if (password !== Admin.password) {
      alert("Incorrect Password!");
    } else {
      history("/Admin");
    }
  };
  return (
    <div>
      <form className="formForAdmin">
        <h2>Login</h2> <br />
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleName}
          />
        </div>
        <div>
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlePassword}
          />
        </div>{" "}
        <br />
        <button
          className="btn btn-success"
          style={{ marginBottom: "20px" }}
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
