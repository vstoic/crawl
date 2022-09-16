const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VenueSchema = new Schema(
  {
    creator_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
  },
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
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    website: {
      type: String,
    }
  }, {
  timestamps: true
})

module.exports = Venue = mongoose.model('Venue', VenueSchema);