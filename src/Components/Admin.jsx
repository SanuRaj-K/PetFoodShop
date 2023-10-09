import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Admin() {
  return (
    <>
      <section id="adminPage">
        <h1 className="adminMain" style={{position:'sticky', top:'0px', zIndex:'1'}}>
          Hello ADMIN <span className="hai">👋</span>
        </h1>
        <section id="side">
          <section className="leftSide">
            <h2 style={{ marginBottom: "30px" }}> Admin</h2>
            <section className="outlet">
              <Link style={{ textDecoration: "none" }} to={"/Admin/Useres"}>
                <h4>Users</h4>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/Admin/Products"}>
                <h4>Products</h4>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/Admin/Revenue"}>
                <h4>Revenue</h4>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/Admin/NewProducts"}
              >
                <h4>Add Products</h4>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <h4>Home</h4>
              </Link>
            </section>
          </section>
          <section className="right">
            <Outlet />
          </section>
        </section>
      </section>
    </>
  );
}

export default Admin;
