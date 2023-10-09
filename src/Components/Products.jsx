import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../App";

function Products() {
  const { productData, setProductData } = useContext(myContext);
  const dogFilter = productData.filter((item) => item.category === "Dog");
  const catFilter = productData.filter((product) => product.category === "cat");

  const handleRemoveItem = (itemName) => {
    const updatedCart = productData.filter(
      (product) => product.name !== itemName
    );

    setProductData(updatedCart);
     
  };

  return (
    <div>
      <h2 className="itemHead">Dog Food Items</h2>
      <ul className="productsList">
        {dogFilter.map((item) => {
          return (
            <li key={item.name} className="ProductsItem">
              <img src={item.path} alt="dogFood" />
              <h4>Name: {item.name}</h4>
              <h6>Price: {item.price}</h6>
              <Link to={"/Admin/" + item.name}>
                <button
                  className="btn btn-warning"
                  style={{ marginBottom: "10px" }}
                >
                  Edit Product
                </button>{" "}
                <br />
              </Link>

              <button
                className="btn btn-danger"
                style={{ marginBottom: "10px" }}
                onClick={() => handleRemoveItem(item.name)}
              >
                Delete Product
              </button>
            </li>
          );
        })}
      </ul>
      <h2 className="itemHead">Cat Food Items</h2>
      <ul className="productsList">
        {catFilter.map((product) => {
          return (
            <li key={product.name} className="ProductsItem">
              <img src={product.path} alt="dogFood" />
              <h4>{product.name}</h4>
              <h6>{product.price}</h6>
              <Link to={"/Admin/" + product.name}>
                <button
                  className="btn btn-warning"
                  style={{ marginBottom: "10px" }}
                >
                  Edit Product
                </button>
                <br />
              </Link>
              <button
                className="btn btn-danger"
                style={{ marginBottom: "10px" }}
                onClick={() => handleRemoveItem(product.name)}
              >
                Delete Product
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
