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
    votecount: {
      type: Number,
      default: 0
    },
    users:[{user_id:String}],
    venues: [{type: String }],
  }, {
  timestamps: true
})

module.exports = Crawl = mongoose.model('Crawl', CrawlSchema);