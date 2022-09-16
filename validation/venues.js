const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateVenueInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required for Venue';
  }

  data.cost = validText(data.cost) ? data.cost : '';
  if (Validator.isEmpty(data.cost)) {
    errors.cost = 'Cost is required for the Venue';
  }

  data.address = validText(data.address) ? data.address : '';
  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address is required for Venue';
  }
  
  if (!data.latitude) {
    errors.latitude = 'Latitude is required'
  }
  
  if (data.latitude && data.latitude.toString().length !== 8) {
    errors.latitude = 'Latitude has to be 7 digits example: "40.72228"'
  }


  if (!data.longitude) {
    errors.longitude = 'Longitude is required'
  }

  if (data.longitude < 0) {
    let longitude = data.longitude * -1.0;
    if (longitude.toString().length !== 8) {
      errors.longitude = 'Longitude has to be 7 digits example: "-73.98742"'
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};