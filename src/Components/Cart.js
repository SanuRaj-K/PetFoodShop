import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { myContext } from "../App";

function Cart() {
  const { cart, setCart } = useContext(myContext);
  const history = useNavigate();
  const [itemQuantity, setItemQuantity] = useState({});
  const totalPrice = cart.reduce(
    (accumulator, item) =>
      accumulator + item.price * (itemQuantity[item.name] || 1),
    0
  );

  const handleBuy = () => {
    if (totalPrice === 0) {
      return alert("Your Cart Is Empty");
    } else {
      history("/Payment");
    }
  };

  const handleLessQuantity = (item) => {
    if (itemQuantity[item.name] === 1) {
      alert("Minimum one quantity");
    } else {
      setItemQuantity((prevQuantity) => ({
        ...prevQuantity,
        [item.name]: prevQuantity[item.name] - 1,
      }));
    }
  };

  const handleAddQuantity = (item) => {
    setItemQuantity((prevQuantity) => ({
      ...prevQuantity,
      [item.name]: (prevQuantity[item.name] || 0) + 1,
    }));
  };

  const handleRemoveItem = (itemName) => {
    const updatedCart = cart.filter((product) => product.name !== itemName);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Check Your Cart</h1>
      <button
        onClick={handleBuy}
        className="btn btn-success"
        style={{ position: "sticky", top: "10px" }}
      >
        <Link style={{ textDecoration: "none", color: "inherit" }}>Buy</Link>
      </button>
      <h3>Your total price is {totalPrice}</h3>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
          paddingTop: "50px",
          alignItems: "center",
        }}
      >
        {cart.map((item, index) => (
          <li
            key={index}
            style={{
              border: "3px solid red",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <img src={item.path} alt="" />
            <h2>Name: {item.name}</h2>
            <h4>Price: {item.price}</h4>
            <div>
              <button onClick={() => handleLessQuantity(item)}>-</button>
              <span>{itemQuantity[item.name] || 1}</span>
              <button onClick={() => handleAddQuantity(item)}>+</button> <br />
              <button
                style={{ marginTop: "10px" }}
                className="btn btn-danger"
                onClick={() => handleRemoveItem(item.name)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
