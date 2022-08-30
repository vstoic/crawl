const express = require("express");
const router = express.Router();
const passport = require("passport");
const Vote = require("../../models/Vote");
const validateVoteInput = require("../../validation/votes")

router.get("/test", (req, res) => res.json({ msg: "This is the votes route" }));

router.get('/', (req, res) => {
  Vote.find()
    .sort({ date: -1 })
    .then(votes => res.json(votes))
    .catch(err => res.status(404).json({ error: 'No votes found' }));
});


//All votes for a crawl showing up by latest createdAt
router.get('/:crawl_id', (req, res) => {
  Vote.find({ crawl_id: req.params.crawl_id })
    .sort({ createdAt: -1 })
    .then(votes => res.json(votes))
    .catch(err =>
      res.status(404).json({ error: 'No votes found from that Crawl' }
      )
    );
});



//Specific Vote with id 
router.get('/:id', (req, res) => {
  const filter = { _id: req.params.id };

  Vote.findOne(filter)
    .then(vote => {
      if (vote) {
        return res.json(vote)
      } else {
        return res.json({ error: "The Vote was not found" }).status(404)
      }
    })
    .catch(() => res.status(404).json({ error: "The Vote was not found" }))
})

router.post("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateVoteInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newVote = new Vote({
      user_id: req.body.user_id,
      voted: req.body.voted,
      crawl_id: req.body.crawl_id,
    });

    newVote
      .save()
      .then(vote => res.json(vote));
  }
);


router.patch("/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateVoteInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }


    const filter = { _id: req.params.id };
    const update = {
      user_id: req.body.user_id,
      voted: req.body.voted,
      crawl_id: req.body.crawl_id,
    };

    Vote.findOneAndUpdate(filter, update, { new: true })
      .then(vote => res.json(vote).status(200))
      .catch(() => res.json({ error: "Vote not found" }).status(404))
  });

// Delete route for comment
router.delete('/:id', (req, res) => {

  const voteFilter = { _id: req.params.id };
  // deletes Crawl
  Vote.findOneAndRemove(voteFilter)
    .then(vote => res.status(200).json(vote))
    .catch(() => res.status(404).json({ error: "Vote not found" })
    )
});

module.exports = router;