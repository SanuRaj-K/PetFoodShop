import React from "react";
import { Link } from "react-router-dom";
function Payment() {
  return (
    <div>
      <h1>CHOOSE YOUR PAYMENT METHOD</h1>

      <div className="payment">
        <Link to={"/CardPayment"}>
          <div>Debit Card</div>
        </Link>
        <Link to={"/CardPayment"}>
          <div>Credit Card</div>
        </Link>
        <Link to={"/CardPayment"}>
          {" "}
          <div>Net Banking</div>
        </Link>
        <Link to={"/CardPayment"}>
          <div>UPI</div>
        </Link>
      </div>
    </div>
  );
}

export default Payment;
