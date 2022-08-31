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
    // this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.setState({
      email: '',
      password: ''
    })
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.setState({
      email: '',
      password: ''
    })

  }

  // Once the user has been authenticated, redirect to the main page
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     // this.props.history.push("/");
  //   }

  //   // Set or clear errors
  //   this.setState({ errors: nextProps.errors });
  // }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
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
    // .then((res) => {
    //   console.log("Response====>", res);
    // });
  }

  // Render the session errors if there are any
  // renderErrors() {
  //   return (
  //     <div className="session-errors">
  //       <ul>
  //         {Object.keys(this.state.errors).map((error, i) => (
  //           <li key={`error-${i}`}>{this.state.errors[error]}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

  render() {
    console.log("Data======>",this.props.venueReducer)
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
            src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"
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
              <p>{errors.email}</p>
              <br />
              <input
                className="password-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <p>{errors.password}</p>
              <br />
              <button className="demo-button-login" onClick={this.handleDemo}>
                Demo User
              </button>
              <br />
              <input className="submit-login" type="submit" value="Login" />
              <p className="signup-redirect">
                New to Crawl? <Link to="/signup">Sign Up</Link>.
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
