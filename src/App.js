import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import Cat from "./Components/Cat";
import Dog from "./Components/Dog";
import Cart from "./Components/Cart";
import Payment from "./Components/Payment";
import CardPayment from "./Components/CardPayment";
import Account from "./Components/Account";
import { createContext, useState } from "react";
import Admin from "./Components/Admin";
import Useres from "./Components/Useres";
import Products from "./Components/Products";
import Revenue from "./Components/Revenue";
import { UsersForAdmin } from "./Assets/CartData";
import AdminLogin from "./Components/AdminLogin";
import ProductView from "./Components/ProductView";
import CompleteData from "./Components/CompleteProduc";
import NewProducts from "./Components/NewProducts";
import EditProduct from "./Components/EditProduct";
import UserDetails from "./Components/UserDetails";
export const myContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [userdata, setUserData] = useState(UsersForAdmin);
  const [productData, setProductData] = useState(CompleteData);
  return (
    <div className="App">
      <myContext.Provider
        value={{
          cart,
          setCart,
          userdata,
          setUserData,
          productData,
          setProductData,
        }}
      >
        <Routes>
          <Route path="/Home" Component={Home} />
          <Route path="/Registration" Component={Registration} />
          <Route path="/Login" Component={Login} />
          <Route path="/" Component={MainPage} />
          {/* <Route path="/Cat" Component={Cat} /> */}
          <Route path="/Dog" Component={Dog} />
          <Route path="/Cart" Component={Cart} />
          <Route path="/Payment" Component={Payment} />
          <Route path="/CardPayment" Component={CardPayment} />
          <Route path="/Account" Component={Account} />
          <Route path="/AdminLogin" Component={AdminLogin} />
          <Route path="/Admin" Component={Admin}>
            <Route path="/Admin/Useres" Component={Useres} />
            <Route path="/Admin/Useres/:name" Component={UserDetails} />
            <Route path="/Admin/Products" Component={Products} />
            <Route path="/Admin/Revenue" Component={Revenue} />
            <Route path="/Admin/:name" Component={ProductView} />
            <Route path="/Admin/NewProducts" Component={NewProducts} />
            <Route path="/Admin/EditProduct" Component={EditProduct} />
          </Route>
        </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;
