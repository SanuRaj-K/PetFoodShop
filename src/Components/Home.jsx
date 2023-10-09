import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
     <>

     <div className="homediv" >
        <div className="innerhome">
     <h1 style={{marginBottom:'50px'}}>Welcome To PetFood Shop</h1>

     <Link to={'/Registration'}>
        <button className="btn btn-info">Registration</button>      <br /> <br />
     </Link>
     <Link to={'/Login'}>
        <button className="btn btn-info">Login</button>     
     </Link>
     </div>
     </div>
     </>
  )
}

export default Home