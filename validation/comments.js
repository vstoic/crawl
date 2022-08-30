const Validator = require('validator');
const validText = require('./valid-text');
const mongoose = require('mongoose');

module.exports = function validateCommentInput(data) {
  let errors = {};

  if (!mongoose.isValidObjectId(data.user_id)) {
    errors.user_id = 'Invalid User ID'
  }
  //commented out to make more dynamic for comments for venues and crawls
  // if (!mongoose.isValidObjectId(data.venue_id)) {
  //   errors.venue_id = 'Invalid Venue ID'
  // }
  if (!mongoose.isValidObjectId(data.crawl_id)) {
    errors.crawl_id = 'Invalid Crawl ID'
  }

  data.body = validText(data.body) ? data.body : '';

  if (!Validator.isLength(data.body, { min: 5, max: 140 })) {
    errors.body = 'Comments must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};