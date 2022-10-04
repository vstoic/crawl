import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GKEY } from '../../googlekey.js';
import "../../assets/stylesheets/map.css";
// import  { 
//     geocodeByAddress,
//     getLatLng,
// } from 'react-places-autocomplete';

class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            address: '',
        //    showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            mapCenter: {
                lat: this.props.venueLat,
                lng: this.props.venueLong
            },

        }
    }
   

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    handleChange = address => {
        this.setState({ address });
    };

    // handleSelect = address => {
    //     geocodeByAddress(address)
    //         .then(results => 
    //             getLatLng(results[0]))
    //         .then(latLng => {
    //             console.log('Success', latLng)
    //             this.setState({ address })
    //             this.setState({ mapCenter: latLng })
    //         })
    //         .catch(error => console.error('Error', error));
    // };


    render() {
        console.log("eeeeeeeeeeeeeeeee",this.props.google)
        // debugger
        return (
            
                

            <Map google={this.props.google}   style={{ width: "36%", height: "51%" }}
                initialCenter={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
               
               center={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
                
                zoom={16}
                >
                <Marker 
                    position={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    />

                {/* <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>  
                </InfoWindow> */}
            </Map>
            
            
        )
    }
}

export default GoogleApiWrapper({
    apiKey: GKEY
})(MapContainer)