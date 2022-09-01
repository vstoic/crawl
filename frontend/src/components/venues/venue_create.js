import React from "react";
import { Link, withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Venue Name",
      description: "A venue description is all about the venue information.",
      cost: "$$$",
      address: "123 Main Street, Brooklyn, NY 11225",
      latitude: "40.503242",
      longitude: "-79.324324",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
      website: "http://www.google.com/",
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
            <h1 className="signup-text1">Create a Venue</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className="username-input"
                type="name"
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="Name"
              />
              <div className="errors">{errors.name}</div>
              <input
                className="username-input"
                type="description"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
              />
              <div className="errors">{errors.description}</div>
              <input
                className="username-input"
                type="cost"
                value={this.state.cost}
                onChange={this.update("cost")}
                placeholder="Cost"
              />
              <div className="errors">{errors.cost}</div>
              <input
                className="username-input"
                type="address"
                value={this.state.address}
                onChange={this.update("address")}
                placeholder="Address"
              />
              <div className="errors">{errors.address}</div>

              <input
                className="username-input"
                type="text"
                value={this.state.image}
                onChange={this.update("image")}
                placeholder="Image"
              />
              <div className="errors">{errors.image}</div>

              <input
                className="username-input"
                type="website"
                value={this.state.website}
                onChange={this.update("website")}
                placeholder="Website"
              />
              <div className="errors">{errors.website}</div>

              <input
                className="username-input"
                type="latitude"
                value={this.state.latitude}
                onChange={this.update("latitude")}
                placeholder="Latitude"
              />
              <div className="errors">{errors.latitude}</div>

              <input
                className="username-input"
                type="longitude"
                value={this.state.longitude}
                onChange={this.update("longitude")}
                placeholder="Longitude"
              />
              <div className="errors">{errors.longitude}</div>

             
            
              <br />
              <input className="submit-signup" type="submit" value="Create Venue" />
             
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
