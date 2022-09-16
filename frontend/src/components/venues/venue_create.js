import React from "react";
import { Link, withRouter } from "react-router-dom";

class VenueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creator_id: this.props.currentUser.id,
      name: "",
      description: "",
      cost: "",
      address: "",
      latitude: "",
      longitude: "",
      image:"",
      website: "",
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearedErrors = false;
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { createVenue, history, errors } = this.props;
    const venue = Object.assign({}, this.state);
    await createVenue(venue)
    .then(() => {
      if (Object.values(errors).length === 0) {
        history.push(`/venues/${venue._id}`);
      }
  });



  //   setTimeout(() => {
  //     if (venue._id) {
  //         history.push(`/venues/${venue._id}`)
  //     }
  // },1000);
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
        
              />
              <div className="errors">{errors.name}</div>
              <input
                className="username-input"
                type="description"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
              />
              <input
                className="username-input"
                type="cost"
                value={this.state.cost}
                onChange={this.update("cost")}
                placeholder="$$$"
               
              />
              <div className="errors">{errors.cost}</div>
              <input
                className="username-input"
                type="address"
                value={this.state.address}
                onChange={this.update("address")}
                placeholder="Address: 90 5th Ave, New York, NY 10011"
              
              />
              <div className="errors">{errors.address}</div>

              <input
                className="username-input"
                type="text"
                value={this.state.image}
                onChange={this.update("image")}
                placeholder="Image url"
              
              />
              

              <input
                className="username-input"
                type="website"
                value={this.state.website}
                onChange={this.update("website")}
                placeholder="Website url"
              
              />
          

              <input
                className="username-input"
                type="latitude"
                value={this.state.latitude}
                onChange={this.update("latitude")}
                placeholder="Latitude ex: 40.50324"
              
              />
              <div className="errors">{errors.latitude}</div>

              <input
                className="username-input"
                type="longitude"
                value={this.state.longitude}
                onChange={this.update("longitude")}
                placeholder="Longitude ex: -79.32432"
               
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

export default withRouter(VenueForm);
