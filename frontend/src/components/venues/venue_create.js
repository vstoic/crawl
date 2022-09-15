import React from "react";
import { Link, withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      cost: "",
      address: "",
      latitude: "",
      longitude: "",
      image:"",
      website: "",
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
    const { create_venue, login, history, currentUser } = this.props;
    const user = Object.assign({}, this.state);
    create_venue(user).then(res => 
        {
             history.push("/venueShow/1234");
        });
    if (currentUser) {
      history.push("/login");
    }
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="session-background">
        <div className="session-image-container">
          {/* <img
            className="logo-image"
            src="https://i.postimg.cc/tRWyZch1/snail-logo.png"
          /> */}
          <img
            className="google-image"
            src="https://i.postimg.cc/05ZwPz18/Shining-bright-idea-light-bulb-with-cogs-on-transparent-background-PNG.png"
          />
        </div>
        <div className="signup-container">
          <div className="signup-text">
            <h1 className="signup-text1">Add a Venue</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className="username-input"
                type="name"
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="Venue Name"
                required
              />
              <div className="errors">{errors.name}</div>
              <input
                className="username-input"
                type="description"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
                required
              />
              <div className="errors">{errors.description}</div>
              <input
                className="username-input"
                type="cost"
                value={this.state.cost}
                onChange={this.update("cost")}
                placeholder="$$$"
                required
              />
              <div className="errors">{errors.cost}</div>
              <input
                className="username-input"
                type="address"
                value={this.state.address}
                onChange={this.update("address")}
                placeholder="Address: 90 5th Ave, New York, NY 10011"
                required
              />
              <div className="errors">{errors.address}</div>

              <input
                className="username-input"
                type="text"
                value={this.state.image}
                onChange={this.update("image")}
                placeholder="Image url"
                required
              />
              <div className="errors">{errors.image}</div>

              <input
                className="username-input"
                type="website"
                value={this.state.website}
                onChange={this.update("website")}
                placeholder="Website url"
                required
              />
              <div className="errors">{errors.website}</div>

              <input
                className="username-input"
                type="latitude"
                value={this.state.latitude}
                onChange={this.update("latitude")}
                placeholder="Latitude ex: 40.503242"
                required
              />
              <div className="errors">{errors.latitude}</div>

              <input
                className="username-input"
                type="longitude"
                value={this.state.longitude}
                onChange={this.update("longitude")}
                placeholder="Longitude ex: -79.324324"
                required
              />
              <div className="errors">{errors.longitude}</div>

              <br />
              <input
                className="submit-signup"
                type="submit"
                value="Create Venue"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
