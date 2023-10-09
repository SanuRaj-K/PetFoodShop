import React, { useContext, useState } from "react";
import logo from "../Assets/Logo/pet-logo-vector-on-white-background-vector-clip-art_csp56058911.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import Cat from "../Assets/Images/cat-551554_1280.jpg";
import Dog from "../Assets/Images/puppy-1903313_1280.jpg";
import { Link } from "react-router-dom";
import data from "./DogFoodArry";
import Data from "./CatFoodArry";
import { myContext } from "../App";
import { LoginUser } from "./Login";

export let searchData = [...Data, ...data];
function MainPage() {
  const [input, setInput] = useState("");
  const { productData } = useContext(myContext);

  return (
    <>
      <nav
        style={{
          padding: "30px",
          background: "skyblue",
          position: "sticky",
          top: "0px",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "90%",
          }}
        >
          <li>
            <img
              className="logoImage"
              src={logo}
              alt="Logo"
              style={{ cursor: "pointer", width: "40px", borderRadius: "80px" }}
            />
          </li>
          <li>
            <input
              type="search"
              id="site-search"
              name="search"
              autoComplete="off"
              placeholder="Type to Search..."
              className="mainSearch"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </li>
          {LoginUser.name === "" ? (
            <Link style={{ textDecoration: "none" }} to={"/Login"}>
              <li>
                <button className="btn btn-danger">Login</button>
              </li>
            </Link>
          ) : (
            <Link style={{ textDecoration: "none" }} to={"/Account"}>
              <li>
                <button className="btn btn-success">Profile</button>
              </li>
            </Link>
          )}
        </ul>
      </nav>
      <div>
        {productData
          .filter((item) => {
            if (input === "") {
              return null;
            } else if (item.name.toLowerCase().includes(input.toLowerCase())) {
              return item;
            }
            return null;
          }).map((val)=>{
            return(
              <ul style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                width: "60%",
                margin: "auto",
                paddingTop: "50px",
                alignItems: "center",
              }}>
                <li>
                  <img src={val.path} alt="" />
                  <h4>{val.name}</h4>
                  <h6>{val.price}</h6>
                </li>
              </ul>
            )
          })
           
          }
      </div>
      <section className="nav">
        <ul className="ForNav">
          <li>Find a Pet Care Centre</li>
          <li>Vets for Pets</li>
          <li>Pets VIP Club</li>
          <li>Pet Insurance</li>
          <li>Flea Subscription</li>
        </ul>
      </section>
      <h1 className="headingMain" style={{ textShadow: "2px 2px 4px" }}>
        WELCOME TO PET FOOD SHOP
      </h1>
      <h3 className="headingMain" style={{ textShadow: "2px 2px 4px" }}>
        SELECT YOUR CATEGORY
      </h3>
      <aside className="left">
        <h2>Browser By</h2>
        <h5>New Cat Products</h5>
        <h5>Kitten</h5>
        <h5>Cat Food</h5>
        <h5>Cat Treats</h5>
        <h5>Flea, Tick & Wormers</h5>
        <h5>Cat Healthcare</h5>
        
        <h5>New Cat Products</h5>
        <h5>Kitten</h5>
        <h5>Cat Food</h5>
      </aside>
      <div className="category">
        <div className="left">
          <h4 style={{ textShadow: "2px 2px skyblue" }}>CAT FOOD</h4>{" "}
          <Link to={"/Cat"}>
            <img src={Cat} alt="cat" className="mainCat" />
          </Link>
        </div>
        <div className="right">
          <h4 style={{ textShadow: "2px 2px skyblue" }}>DOG FOOD</h4>
          <Link to={"/Dog"}>
            <img src={Dog} alt="dog" className="mainDog" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainPage;
