import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myContext } from "../App";

function ProductView() {
  const { productData, setProductData } = useContext(myContext);
  const { name: productName } = useParams();
  const navigate = useNavigate();

  const currentProduct = productData.find((item) => item.name === productName);

  const [name, setName] = useState(currentProduct ? currentProduct.name : "");
  const [price, setPrice] = useState(
    currentProduct ? currentProduct.price : ""
  );
  const [image, setImage] = useState(currentProduct ? currentProduct.path : "");

  const handleUpdate = () => {
    if (!currentProduct) {
      return;
    }

    const updatedProduct = {
      ...currentProduct,
      name,
      price,
      image,
    };

    const updatedProducts = productData.map((item) =>
      item.id === currentProduct.id ? updatedProduct : item
    );

    setProductData(updatedProducts);
    navigate("/Admin/Products");
    alert("Updated Successfully");
  };

  return (
    <div>
      <form action="">
        <img src={image} alt="Item pic" /> <br /> <br />
        <label htmlFor="name">Name: &nbsp;</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="price">Price: &nbsp;</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="Image">Image: &nbsp;</label>
        <input
          type="text"
          name="Image"
          id="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />{" "}
        <br /> <br />
        <span className="btn btn-success" onClick={handleUpdate}>
          Update
        </span>
      </form>
    </div>
  );
}

export default ProductView;
