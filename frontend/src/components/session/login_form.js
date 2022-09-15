// src/components/session/login_form.js

import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/stylesheets/session_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this)
    this.clearErrors = this.clearErrors.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.currentTarget.value,});
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    const { login, currentUser, history } = this.props;
 
    login(user);
      if (currentUser) {
        history.push("/");
      }
  }

  clearErrors(e) {
    this.props.clearErrors()
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = {
      email: "demo@appacademy.com",
      password: "howsthecodelooking?"
    }
    const speed = 65;
    if (this.state.email !== demo.email) {
      const inputEmail = setInterval(() => {
        if (this.state.email !== demo.email) {
          const temp = demo.email.slice(0, this.state.email.length + 1);
          this.setState({ email: temp })
        } else {
          clearInterval(inputEmail);
          animatePW();
        }
      }, speed)
    }
    const animatePW = () => {
      if (this.state.password !== demo.password) {
        const inputPassword = setInterval(() => {
          if (this.state.password !== demo.password) {
            const temp = demo.password.slice(0, this.state.password.length + 1);
            this.setState({ password: temp });
          } else {
            clearInterval(inputPassword);
            this.props.login(demo);
            if (this.props.currentUser) {
              this.props.history.push("/");
            }
          }
        }, speed);
      }
    }
  }

  render() {
    // console.log("Data======>",this.props.venueReducer)
    const { errors } = this.props;

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
            // src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"
          />
        </div>
        <div className="login-container">
          <div className="login-text">
            <h1 className="login-text1">Adventures Await</h1>
            {/* <h2 className="signup-redirect-main">New to crawl? <Link className="signup-link" to="/signup">Sign Up</Link>.</h2> */}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
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
              <input className="submit-login" type="submit" value="Login" />
              <br/>
              <button className="demo-button-login" onClick={this.handleDemo}>
                Demo User
              </button>
              <p className="signup-redirect">
                New to Crawl? <Link to="/signup" className="linkfont">Sign Up</Link>.
              </p>
              {/* {this.renderErrors()} */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
