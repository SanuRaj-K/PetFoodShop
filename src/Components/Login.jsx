import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ExistingUser } from "./Registration";

const LoginUser = {
  name: "",
  password: "",
  email: "",
};

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const history = useNavigate();
  const handleOnchange = (e) => {
    setUser(e.target.value);
  };
  const handleOnchangeTwo = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = () => {
    if (user !== ExistingUser.name) {
      alert(" User not found!");
    } else if (pass !== ExistingUser.password) {
      alert("Incorrect Password");
    } else if (user.length === 0 && pass.length === 0) {
      alert("Enter Your Username and Password");
    } else {
      history("/");
    }
  };
  LoginUser.name = user;
  LoginUser.password = pass;
  LoginUser.email = ExistingUser.mail;

  return (
    <>
      <div className="login-container" style={{ height: "100vh" }}>
        <h1>Login Here!</h1>
        <div className="logindiv">
          <div className="innerform">
            <label htmlFor="username" className="user">
              UserName
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleOnchange}
              autoComplete="off"
            />
            <br /> <br />
            <label htmlFor="Password">Password: </label>
            <input
              type="password"
              name="Password"
              id="Password"
              onChange={handleOnchangeTwo}
            />{" "}
            <br />
            <br />
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
            <p>If You Don't Have Account, Please Register </p>
            <Link to={"/Registration"}>
              <button
                className="btn btn-primary"
                style={{ marginBottom: "20px" }}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
        <Link to={"/AdminLogin"}>
          <h3
            style={{
              position: "relative",
              left: "120px",
              background: "green",
              borderRadius: "8px",
              display: "inline-block",
              textDecoration: "none",
              color: "white",
              fontSize: "18px",
              padding: "10px",
            }}
          >
            Admin
          </h3>
        </Link>
      </div>
    </>
  );
}

export default Login;
export { LoginUser };
