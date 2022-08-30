const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CrawlSchema = new Schema(
  {
    creator_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    category: {
      type: String,
      required: true
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
      type: String,
      required: true 
    },
    distance: {
      type: String,
      required: true 
    },
    venues: [{type: Object }],
  }, {
  timestamps: true
})

module.exports = Crawl = mongoose.model('Crawl', CrawlSchema);