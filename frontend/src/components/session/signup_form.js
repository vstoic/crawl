// src/components/session/signup_form.js

import React from "react";
import { Link, withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      handle: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-background">
        <div className="session-image-container">
          <img
            className="logo-image"
            src="https://i.postimg.cc/tRWyZch1/snail-logo.png"
          />
          {/* <img className="google-image" src="https://i.postimg.cc/02PL3BDw/googlemap.png"/> */}
          <img
            className="google-image"
            src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"
          />
        </div>
        <div className="signup-container">
          <div className="signup-text">
            <h1 className="signup-text1">Sign Up</h1>
            {/* <h2 className="signup-redirect-main">New to crawl? <Link className="signup-link" to="/signup">Sign Up</Link>.</h2> */}
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
              <br />
              <input
                className="email-input"
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                className="password-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input
                className="password-input"
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <br />
              <button className="demo-button-signup" onClick={this.handleDemo}>
                Demo User
              </button>
              <br />
              <input className="submit-signup" type="submit" value="Sign Up" />
              <p className="login-redirect">
                New to Crawl? <Link to="/login">Login</Link>.
              </p>
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
      // <div className="signup-form-container">
      //   <form onSubmit={this.handleSubmit}>
      //     <div className="signup-form">
      //       <br />
      //       <input
      //         type="text"
      //         value={this.state.email}
      //         onChange={this.update("email")}
      //         placeholder="Email"
      //       />
      //       <br />
      //       <input
      //         type="text"
      //         value={this.state.handle}
      //         onChange={this.update("handle")}
      //         placeholder="Handle"
      //       />
      //       <br />
      //       <input
      //         type="password"
      //         value={this.state.password}
      //         onChange={this.update("password")}
      //         placeholder="Password"
      //       />
      //       <br />
      //       <input
      //         type="password"
      //         value={this.state.password2}
      //         onChange={this.update("password2")}
      //         placeholder="Confirm Password"
      //       />
      //       <br />
      //       <input type="submit" value="Submit" />
      //       {this.renderErrors()}
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default withRouter(SignupForm);
