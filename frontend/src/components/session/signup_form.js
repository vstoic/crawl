// src/components/session/signup_form.js

import React from "react";
import { Link, withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearedErrors = false;
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { signup, login, history, currentUser } = this.props;
    const user = Object.assign({}, this.state);
    
    signup(user)
    if (currentUser) {
      history.push("/login");
    }
  }

  render() {
    const { errors } = this.props;
  
    return (
      <div className="session-background">
        <div className="session-image-container">
          <img
            className="logo-image"
            src="https://i.postimg.cc/tRWyZch1/snail-logo.png"
          />
          <img
            className="google-image"
            src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"
          />
        </div>
        <div className="signup-container">
          <div className="signup-text">
            <h1 className="signup-text1">Sign Up</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className="username-input"
                type="username"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <div className="errors">{errors.username}</div>
              <input
                className="email-input"
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <div className="errors">{errors.email}</div>
              <input
                className="password-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <div className="errors">{errors.password}</div>
              <input
                className="password-input"
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <div className="errors">{errors.password2}</div>
             
              <br />
              <input className="submit-signup" type="submit" value="Sign Up" />
              <p className="login-redirect">
                New to Crawl? <Link to="/login">Login</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
  
    );
  }
}

export default withRouter(SignupForm);
