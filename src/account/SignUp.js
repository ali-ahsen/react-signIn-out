import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          username: "",
          password: "",
          confirmPassword: "",
        };
      }
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
      handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userData", JSON.stringify(this.state));
        console.log(this.state)
      };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
            value={this.state.name}
            onChange={this.handleInputChange}

              />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="User name" 
                  name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter confirm password"
                name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
<NavLink className="nav-link" to="/sign-in">Sign Up</NavLink>
              </button>
            </div>
          </form>
        );
    }
}