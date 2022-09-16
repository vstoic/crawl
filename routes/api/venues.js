const express = require("express");
const router = express.Router();
const validateVenueInput = require('../../validation/venues');
const Venue = require('../../models/Venue');
const passport = require("passport");

router.get("/test", (req, res) => res.json({ msg: "This is the venues route" }));

// Index route; grabs all venues
router.get('/', (req, res) => {
  Venue.find().then(venues => res.json(venues))
});


// All Crawls for a Specific User
router.get('/users/:user_id', (req, res) => {
  const filter = { creator_id: req.params.user_id }
  Venue.find(filter)
    .then(venue => res.json(venue))
    .catch(err => res.json(err).status(404))
});

// Route to retrieve individual venues
router.get('/:id', (req, res) => {
  // filters by question id
  const filter = { _id: req.params.id };

  Venue.findOne(filter)
    .then(venue => {
      if (venue) {
        return res.json(venue)
      } else {
        return res.json({ error: "Venue not found" }).status(404)
      }
    })
    .catch(() => res.status(404).json({ error: "Venue not found" }))
});

//Create a venue
router.post('/', 
  passport.authenticate("jwt", { session: false }),
(req, res) => {
  // validates venue information
  const { errors, isValid } = validateVenueInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const creator_id = req.body.creator_id;
  const name = req.body.name;
  const description = req.body.description;
  const cost = req.body.cost;
  const address = req.body.address;
  const longitude = req.body.longitude;
  const latitude = req.body.latitude;
  const image = req.body.image;
  const website = req.body.website;


  const newVenue = new Venue({
    creator_id,
    name,
    description,
    cost,
    address,
    longitude,
    latitude,
    image,
    website
  });

  newVenue.save()
    .then(crawl => res.json(crawl).status(200))
    .catch(err => res.json(err).status(404))
});

// Updates Venue -- 
router.patch('/:id',
passport.authenticate("jwt", { session: false }),
(req, res) => {

  // validates updates
  const { errors, isValid } = validateVenueInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const creator_id = req.body.creator_id;
  const name = req.body.name;
  const description = req.body.description;
  const cost = req.body.cost;
  const address = req.body.address;
  const longitude = req.body.longitude;
  const latitude = req.body.latitude;
  const image = req.body.image;
  const website = req.body.website;


  const filter = { _id: req.params.id };
  const update = {
    creator_id,
    name,
    description,
    cost,
    address,
    longitude,
    latitude,
    image,
    website
  };

  Venue.findOneAndUpdate(filter, update, { new: true })
    .then(venue => res.json(venue).status(200))
    .catch(() => res.json({ error: "Venue not found" }).status(404))
});

// Delete route for venue
router.delete('/:id',
passport.authenticate("jwt", { session: false }),
(req, res) => {

  const venueFilter = { _id: req.params.id };
  // deletes Crawl
  Venue.findOneAndRemove(venueFilter)
    .then(venue => res.status(200).json(venue))
    .catch(() => res.status(404).json({ error: "Venue not found" })
    )
});

module.exports = router;