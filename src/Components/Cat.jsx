import React, { useContext } from "react";
import Cart from "../Assets/Icons/icons8-cart-50.png";
import { Link } from "react-router-dom";
import { LoginUser } from "./Login";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Logo/pet-logo-vector-on-white-background-vector-clip-art_csp56058911.webp";

function Cat() {
  const his = useNavigate();
  const { cart, setCart } = useContext(myContext);
  const { productData } = useContext(myContext);
  const catFilter = productData.filter((product) => product.category === "cat");

  const myFunction = (item) => {
    const isItemInCart = cart.some((cartItem) => cartItem.name === item.name);
    if (LoginUser.name === "") {
      his('/Login')
      return alert("Please Login");
    } else if (isItemInCart) {
      alert("Item is already added to the cart.");
    } else {
      setCart([...cart, item]);
    }
  };
  const handleEmptyCart = () => {
    if (LoginUser.name === "") {
      his("/Login");
      return alert("Please Login");
    } else {
      his("/Cart");
    }
  };
  return (
    <>
      <h1
        style={{
          textTransform: "capitalize",
          marginTop: "60px",
          backgroundColor: "skyblue",
          position: "sticky",
          top: "20px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt="Logo"
            style={{ cursor: "pointer", width: "40px", borderRadius: "80px" }}
            className="productTimeLogo"
          />{" "}
        </Link>
        Add to cart for buy the food items
        <span style={{ color: "red" }}>
          <img src={Cart} alt="" className="cart" onClick={handleEmptyCart} />

          {cart.length}
        </span>
        <Link to={"/Dog"}>
          {" "}
          <button className="goto btn btn-primary  ">Go To Dog Food</button>
        </Link>
      </h1>

      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "60%",
          margin: "auto",
          paddingTop: "50px",
          alignItems: "center",
        }}
      >
        {catFilter.map((item) => (
          <Link style={{ textDecoration: "none", color: "violet" }}>
            <li
              key={item.name}
              style={{
                border: "3px solid red",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            >
              <img src={item.path} alt="images" style={{ height: "200px" }} />
              <h3>{item.name}</h3>
              <h3> Price: {item.price}</h3>
              <span
                onClick={(e) => myFunction(item)}
                className="btn btn-primary  "
                style={{ marginBottom: "12px" }}
              >
                Add to Cart
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Cat;
