import React, { useContext, useState } from "react";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";

function NewProducts() {
  const navigate = useNavigate();
  const { productData, setProductData } = useContext(myContext);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [id, setId] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const obj = {
    name: name,
    price: price,
    id: id,
    category: category,
    path: image,
  };

  const handleUpdate = () => {
  
    setProductData([...productData, obj]);
    if (obj.name === undefined) {
     return alert("Please Enter Product Details");
    } else 
    navigate("/Admin/Products");
   return  alert("Product Added Successfully");
      
  };
  return (
    <div>
      <h2>Add Your New Products</h2>
      <form action="">
        <img src={image} alt="imge" /> <br /> <br />
        <label htmlFor="Id"> &nbsp; Id: &nbsp;</label>
        <input
          type="number"
          name="Id"
          id="Id"
          onChange={(e) => setId(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="name">Name: &nbsp;</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="Image">Image: &nbsp;</label>
        <input
          type="text"
          name="Image"
          id="Image"
          onChange={(e) => setImage(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="price">Price: &nbsp;</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        <br />
        <label htmlFor="cate">category:</label>
        <select
          name="cate"
          id="cate"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="cat">cat</option>
          <option value="Dog">Dog</option>
        </select>
        <br /> <br />
        <span className="btn btn-success" onClick={() => handleUpdate()}>
          Update
        </span>
      </form>
    </div>
  );
}

export default NewProducts;
