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
  
  if (!data.longitude.length === 7) {
    errors.longitude = "Please Insert a valid Longitude like '40.56254'"
  }

  if (!data.latitude.length === 7) {
    errors.latitude = "Please Insert a valid Longitude like '-70.56254'"
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};