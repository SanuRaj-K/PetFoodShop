import React from "react";
import { UsersForAdmin } from "../Assets/CartData";
import User from "../Assets/Icons/icons8-user-24.png";
import { Link } from "react-router-dom";
function Useres() {
  const handleUser = () => {};
  return (
    <div>
      <section id="users">
        <h1>Login Users</h1>
        {UsersForAdmin.map((item) => {
          return (
            <ul>
              <Link to={'/Admin/Useres/'+item.name} style={{textDecoration:'none', color:'black'}}>
              <li key={item.id} onClick={handleUser}>
                <img src={User} alt="log" />
                <h4>{item.name}</h4>
                <h6>{item.mail}</h6>
                <h6>{item.password}</h6>
              </li>
              </Link>
            </ul>
          );
        })}
      </section>
    </div>
  );
}

export default Useres;
