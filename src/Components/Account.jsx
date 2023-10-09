import React from "react";
import { Link } from "react-router-dom";
import { LoginUser } from "./Login";
function Account() {
  const hanldeSignout = (LoginUser) => { return LoginUser===''};
  return (
    <div className="container">
      <h1>ACCOUNT DETAILS</h1>

      <h3> UserName: {LoginUser.name}</h3>
      <h4> Email: {LoginUser.email}</h4>
      <Link to={"/Login"}>
        <button className="btn btn-warning" onClick={() => hanldeSignout(LoginUser)}>
          SignOut
        </button>
      </Link>
    </div>
  );
}

export default Account;
