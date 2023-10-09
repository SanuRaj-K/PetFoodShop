import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UsersForAdmin } from "../Assets/CartData";
import User from "../Assets/Icons/icons8-user-24.png";

function UserDetails() {
  const { name: Username } = useParams();
  console.log(Username);
  const CurrentUser = UsersForAdmin.find((item) => item.name === Username);
  const [name] = useState(CurrentUser.name);
  const [mail] = useState(CurrentUser.mail);
  return (
    <div style={{ border: "1px solid blue", width: "30%", margin: "auto" }}>
      <img src={User} alt="log" />
      <h2>Name: {name}</h2>
      <h3>Mail: {mail}</h3>
      <h4>Order Details</h4>
      <textarea name="texi" id="" cols="30" rows="10">
        product
      </textarea>
    </div>
  );
}

export default UserDetails;
