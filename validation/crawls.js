const Validator = require('validator');
const validText = require('./valid-text');
const mongoose = require('mongoose');

module.exports = function validateCrawlInput(data) {
  let errors = {};

  const categories = ["Food and Drinks", "Active Life", "Art and Entertainment", "Night Life", "Shopping", "Wellness", "Other"];

  if (!mongoose.isValidObjectId(data.creator_id)) {
    errors.creator_id = 'Invalid Creator ID'
  }

  data.category = validText(data.category) ? data.category : '';
  if (!categories.includes(data.category)) {
    errors.category = 'Invalid Category'
  }
  if (Validator.isEmpty(data.category)) {
    errors.text = 'Category is required';
  }

  data.title = validText(data.title) ? data.title : '';
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  data.description = validText(data.description) ? data.description : '';
  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required';
  }
  if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
    errors.description = 'Description must be between 5 and 140 characters';
  }

  data.cost = validText(data.cost) ? data.cost : '';
  if (Validator.isEmpty(data.cost)) {
    errors.cost = 'Cost is required';
  }

  if (Validator.isEmpty(data.time)) {
    errors.cost = 'Time is required';
  }

  if (Validator.isEmpty(data.distance)) {
    errors.cost = 'Distance is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};