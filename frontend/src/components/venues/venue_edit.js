import React from "react";
import { withRouter } from "react-router-dom";

class VenueEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creator_id: this.props.currentUser.id,
      id: this.props.venue.data._id,
      name: this.props.venue.data.name,
      description: this.props.venue.data.description,
      cost: this.props.venue.data.cost,
      address: this.props.venue.data.address,
      latitude: this.props.venue.data.latitude,
      longitude: this.props.venue.data.longitude,
      image: this.props.venue.data.image,
      website: this.props.venue.data.website,
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
    const { updateVenue, history } = this.props;
    const venue = Object.assign({}, this.state);
    await updateVenue(venue)
    .then(() => { 
     
    history.push(`/venueShow/${venue.id}`);
      
  });
  }

  render() {
    // console.log(this.props.venue.data);
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
            <h1 className="signup-text1">Edit Venue</h1>
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

            {/* the option should be pre-selected need to work on */}
              <select className="username-input"
                      onChange={this.update("cost")}
              >
                  <option value="defaultValue" selected="true" disabled="disabled">Select a Cost</option>
                  <option value={"$"}>$</option>
                  <option value={"$$"}>$$</option>
                  <option value={"$$$"}>$$$</option>
                  <option value={"$$$$"}>$$$$</option>
                  <option value={"$$$$$"}>$$$$$</option>
              </select>

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
                value="Complete Venue Edit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(VenueEditForm);