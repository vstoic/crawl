const Validator = require('validator');
const validText = require('./valid-text');
const mongoose = require('mongoose');

module.exports = function validateVoteInput(data) {
  let errors = {};

  if (!mongoose.isValidObjectId(data.user_id)) {
    errors.user_id = 'Invalid User ID'
  }

  if (!mongoose.isValidObjectId(data.crawl_id)) {
    errors.crawl_id = 'Invalid Crawl ID'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};