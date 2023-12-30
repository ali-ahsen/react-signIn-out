import React from 'react'
import { NavLink, useNavigate} from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
   const handleSignIn = (e) => {
        e.preventDefault();
        const enteredUsername = e.target.elements.username.value;
        const enteredPassword = e.target.elements.password.value;
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData && enteredUsername === storedUserData.username && enteredPassword === storedUserData.password
        ) {
          alert("Data is matched");
          navigate('/home');
        } else {
          alert("Incorrect username or password");
        }
      };
  return (
    <form onSubmit={handleSignIn}>
    <strong className="arrow-back float-start text-danger">
      <NavLink to="/">back</NavLink>
    </strong>
    <h3>Sign In</h3>
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter user name"
        name="username"
      />
    </div>
    <div className="mb-3">
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        name="password"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  </form>
  )
}
export default SignIn