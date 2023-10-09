import React from "react";
 import { Link } from "react-router-dom";
import cartimage from "../Assets/Icons/icons8-cart-50.png";
import { useContext } from "react";
import { myContext } from "../App";
import { LoginUser } from "./Login";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Logo/pet-logo-vector-on-white-background-vector-clip-art_csp56058911.webp";
function Dog() {
  const history = useNavigate();
  const { cart, setCart } = useContext(myContext);
  const {productData}=useContext(myContext)
  const dogFilter = productData.filter((item) => item.category === "Dog");

    const handleCart = (item) => {
  const isItemInCart = cart.some((cartItem) => cartItem.name === item.name);
    if (LoginUser.name === "") {
      history('/Login')
      return alert("Please Login");
    }
    if (isItemInCart) {
      alert("Item is already added to the cart.");
    } else {
      setCart([...cart, item]);
    }
  };
  const handleEmptyCart = () => {
    if (LoginUser.name === "") {
      history('/Login')
      return alert("Please Login");
      
    } else {
      history("/Cart");
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
            className="productTimeLogo"
            alt="Logo"
            style={{ cursor: "pointer", width: "40px", borderRadius: "80px" }}
          />{" "}
        </Link>
        Add to cart For buy the food items
        <span style={{ color: "red" }}>
          <img
            className="cart"
            src={cartimage}
            alt=""
            onClick={handleEmptyCart}
          />

          {cart.length}
        </span>
        <Link to={"/Cat"}>
          <button className="goto btn btn-primary">Go To Cat Food</button>
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
        {dogFilter.map((item, index) => (
          <li
            key={index}
            style={{
              border: "3px solid red",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <img src={item.path} alt="images" style={{ height: "200px" }} />

            <h3 style={{ color: "black" }}>{item.name}</h3>
            <h3 style={{ color: "black" }}> Price: {item.price}</h3>
            <button
              onClick={() => handleCart(item)}
              className="btn btn-primary"
              style={{ marginBottom: "12px" }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dog;
 
