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
  
  data.longitude = validText(data.longitude) ? data.longitude : '';
  if (Validator.isEmpty(data.longitude)) {
    errors.longitude = 'Longitude is required for Venue';
  }

  data.latitude = validText(data.latitude) ? data.latitude : '';
  if (Validator.isEmpty(data.latitude)) {
    errors.latitude = 'Latitude is required for Venue';
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};