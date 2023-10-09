import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UsersForAdmin } from "../Assets/CartData";
const ExistingUser = {
  name: "",
  password: "",
  mail: "",
};
function Registration() {
  const history = useNavigate();
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(ExistingUser.name!==''){
      return UsersForAdmin.push(ExistingUser);
    }
    
    
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Registration Completed successfully!");
      history("/login");
    }
  }, [formErrors, isSubmit, history]);

  const validate = (values) => {
    const errors = {};

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!regex.test(values.email)) {
      errors.email = "Email  is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must  contain atleast 4 charaacters";
    }
    if (values.password.length > 10) {
      errors.password = "Password not exceed more than 10 charaacters";
    }

    return errors;
  };
  ExistingUser.name = formValues.username;
  ExistingUser.password = formValues.password;
  ExistingUser.mail = formValues.email;
  return (
    <>
      <div className="formdiv">
        <h1 style={{ paddingBottom: "50px" }}>Registration</h1>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="alert alert-success" role="alert">
            Signed Successfully!, Click <Link to={"/Login"}>Login</Link> to
            Continue
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            Please Fill the Below form for Register
          </div>
        )}

        <form
        className="registerForm"
          action=""
          style={{
            border: "1px solid darkblue",
            padding: "20px",
            width: "30%",
            margin: "0 auto",
            backgroundColor: "skyblue",
            boxShadow: "5px 5px 10px gray",
          }}
        >
          <div>
            <label htmlFor="name">UserName:</label>
          </div>
          <input
            type="text"
            name="username"
            id="name"
            placeholder="Enter your name"
            value={formValues.username}
            onChange={handleChange}
            autoComplete="off"
          />
          <p>{formErrors.username}</p>

          <div>
            {" "}
            <label htmlFor="email">Email: </label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Mail "
            value={formValues.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <p>{formErrors.email}</p>

          <div>
            {" "}
            <label htmlFor="password">Password: </label>{" "}
          </div>
          <input
            type="Password"
            name="password"
            id="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
          <Link>
            <button onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </Link>
        </form>
        <form
        className="registerForm-width"
          action=""
          style={{
             
          }}
        >
          <div>
            <label htmlFor="name">UserName:</label>
          </div>
          <input
            type="text"
            name="username"
            id="name"
            placeholder="Enter your name"
            value={formValues.username}
            onChange={handleChange}
            autoComplete="off"
          />
          <p>{formErrors.username}</p>

          <div>
            {" "}
            <label htmlFor="email">Email: </label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Mail "
            value={formValues.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <p>{formErrors.email}</p>

          <div>
            {" "}
            <label htmlFor="password">Password: </label>{" "}
          </div>
          <input
            type="Password"
            name="password"
            id="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
          <Link>
            <button onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Registration;
export { ExistingUser };
