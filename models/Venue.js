const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VenueSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    cost: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    longitude: {
      type: String,
      required: true
    },
    latitude: {
      type: String,
      required: true
    },
    image: {
      type: String,
    }
  }, {
  timestamps: true
})

module.exports = Venue = mongoose.model('Venue', VenueSchema);