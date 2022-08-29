const express = require("express");
const Crawl = require("../../models/Crawl");
const router = express.Router();
const validateCrawlInput = require('../../validation/crawls')

router.get("/test", (req, res) => res.json({ msg: "This is the crawls route" }));

// All Crawls
router.get('/', (req, res) => {
  Crawl.find().then(crawl => res.json(crawl))
})

// All Crawls for a Specific User
router.get('/users/:user_id', (req, res) => {
  const filter = { creator_id: req.params.user_id }
  Crawl.find(filter)
    .then(crawl => res.json(crawl))
    .catch(err => res.status(404).json({ noSetFound: "No set found " }))
})

//Specific Crawl with id 
router.get('/:id', (req, res) => {
  const filter = { _id: req.params.id };

  Crawl.findOne(filter)
    .then(crawl => {
      if (crawl) {
        return res.json(crawl)
      } else {
        return res.json({ error: "The Crawl was not found" }).status(404)
      }
    })
    .catch(() => res.status(404).json({ error: "The Crawl was not found" }))
})

//Create a crawl
router.post('/', (req, res) => {
  // validates crawl information
  const { errors, isValid } = validateCrawlInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const creator_id = req.body.creator_id;
  const category = req.body.category;
  const title = req.body.title;
  const description = req.body.description;
  const cost = req.body.cost;
  const time = req.body.time;
  const distance = req.body.distance;
  const venues = req.body.venues;


  const newCrawl = new Crawl({
    creator_id,
    category,
    title,
    description,
    cost,
    time,
    distance,
    venues
  });

  newCrawl.save()
    .then(crawl => res.json(crawl).status(200))
    .catch(err => res.json(err).status(404))
});

// Updates Crawl -- should be used as part of the create page on the front end
// Set should be created, and then populated with questions
router.patch('/:id', (req, res) => {

  // validates updates
  const { errors, isValid } = validateCrawlInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const creator_id = req.body.creator_id;
  const category = req.body.category;
  const title = req.body.title;
  const description = req.body.description;
  const cost = req.body.cost;
  const time = req.body.time;
  const distance = req.body.distance;
  const venues = req.body.venues;

  const filter = {_id: req.params.id };
  const update = {
    creator_id,
    category,
    title,
    description,
    cost,
    time,
    distance,
    venues
  };

  Crawl.findOneAndUpdate(filter, update, { new: true })
    .then(crawl => res.json(crawl).status(200))
    .catch(() => res.json({ error: "Social Crawl not found" }).status(404))
});

// Delete route for crawl
router.delete('/:id', (req, res) => {

  const crawlFilter = { _id: req.params.id };
  // deletes Crawl
  Crawl.findOneAndRemove(crawlFilter)
    .then(crawl => res.status(200).json(crawl))
    .catch(() => res.status(404).json({ error: "Social Crawl not found" })
    )
});

module.exports = router;