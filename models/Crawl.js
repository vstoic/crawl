const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CrawlSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    cost: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true 
    },
    distance: {
      type: Number,
      required: true 
    },
    venues: [{type: Object}],
  }, {
  timestamps: true
})

module.exports = Crawl = mongoose.model('Crawl', CrawlSchema);