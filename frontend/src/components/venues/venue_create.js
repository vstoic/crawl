import React from "react";
import { Link, withRouter } from "react-router-dom";
import GooglePlacesAutocomplete ,{geocodeByAddress,getLatLng} from 'react-google-places-autocomplete';
class VenueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creator_id: this.props.currentUser.id,
      name: "",
      description: "",
      cost: "",
      address: "",
      latitude: 0,
      longitude: 0,
      image:"",
      website: "",
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearedErrors = false;
  }
  getImageUrl = async(image) => {

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "uqb0krjs");
    data.append("cloud_name", "dhudcmiwm");
    
    fetch("  https://api.cloudinary.com/v1_1/dhudcmiwm/image/upload", {
      method: "post",
      body: data,
  })
  
  .then((resp) => resp.json())
  .then((data) => {
    this.setState({"image":data.url})
    
     
    // setUrl(data.url);
  })
  .catch((err) => console.log(err));
  }
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { createVenue, history } = this.props;
    const venue = Object.assign({}, this.state);
    await createVenue(venue)
    .then((response) => { 
      if (response.venue.data._id) {
        history.push(`/venueShow/${response.venue.data._id}`);
      }
  });
  }
   handleAddress = (e)=>{
    // console.log("Location======>",e)
  //   setSelectedAddress(e);
    geocodeByAddress(e)
   .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) => {
  this.setState({latitude:lat.toFixed(5),longitude:lng.toFixed(5),address:e})
  }
    
    
  )
   }
  render() {
    // console.log("State======>",this.state)
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
          
          <form onSubmit={this.handleSubmit}>
            
            <div className="venue-create-form">
            <div className="signup-text">
            <h1 className="signup-text1">Add a Venue</h1>
          </div>
              <input
                className="venue-input"
                type="name"
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="Venue Name"
        
              />
              <div className="errors">{errors.name}</div>
              <input
                className="venue-input"
                type="description"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
              />

              <select className="venue-input-cost"
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
              <div className="venue-addy">
              <GooglePlacesAutocomplete className="venue-addy1"
      apiKey="AIzaSyD4-hpbaKGHFJ1Qz4U4apvb-kH6UeRg9-I"
      selectProps={{
        placeholder: 'Address *',
        name:"address",
        // inputValue:inputField['address'],
        // onInputChange : (e)=>{setInputField({...inputField, ['address']: e})},
        onChange:(place) => {this.handleAddress(place.label)}
        }}
    />
       </div>
              {/* <input
                className="username-input"
                type="address"
                value={this.state.address}
                onChange={this.update("address")}
                placeholder="Address: 90 5th Ave, New York, NY 10011"
              
              /> */}
              <div className="errors">{errors.address}</div>

              {/* <input
                className="username-input"
                type="text"
                value={this.state.image}
                onChange={this.update("image")}
                placeholder="Image url"
              
              /> */}
              <div><span>Add Image</span></div>
               <input type="file" accept="images/*" onChange={(e) => this.getImageUrl(e.target.files[0])}/>

              <input
                className="venue-input"
                type="website"
                value={this.state.website}
                onChange={this.update("website")}
                placeholder="Website url"
              
              />
          

              <input
                className="venue-input"
                type="latitude"
                value={this.state.latitude}
                onChange={this.update("latitude")}
                placeholder="Latitude ex: 40.50324"
              
              />
              <div className="errors">{errors.latitude}</div>

              <input
                className="venue-input"
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
