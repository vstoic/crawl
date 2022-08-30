const express = require("express");
const router = express.Router();
const passport = require("passport");
const Comment = require("../../models/Comment");
const validateCommentInput = require("../../validation/comments")

router.get("/test", (req, res) => res.json({ msg: "This is the comments route" }));

router.get('/', (req, res) => {
  Comment.find()
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ error: 'No comments found' }));
});


//All comments for a crawl showing up by latest createdAt
router.get('/:crawl_id', (req, res) => {
  Comment.find({ crawl_id: req.params.crawl_id })
    .sort({ createdAt: -1 })
    .then(comments => res.json(comments))
    .catch(err =>
      res.status(404).json({ error: 'No comments found from that Crawl' }
      )
    );
});


// router.get('/:venue_id', (req, res) => {
//   Comment.find({ venue_id: req.params.venue_id })
//     .then(comments => res.json(comments))
//     .catch(err =>
//       res.status(404).json({ nocommentsfound: 'No comments found from that Venue' }
//       )
//     );
// });


//Specific Comment with id 
router.get('/:id', (req, res) => {
  const filter = { _id: req.params.id };

  Comment.findOne(filter)
    .then(comment => {
      if (comment) {
        return res.json(comment)
      } else {
        return res.json({ error: "The Comment was not found" }).status(404)
      }
    })
    .catch(() => res.status(404).json({ error: "The Comment was not found" }))
})

router.post("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      user_id: req.body.user_id,
      body: req.body.body,
      crawl_id: req.body.crawl_id,
      venue_id: req.body.venue_id,
    });

    newComment
      .save()
      .then(comment => res.json(comment));
  }
);


router.patch("/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }


    const filter = { _id: req.params.id };
    const update = {
      user_id: req.body.user_id,
      body: req.body.body,
      crawl_id: req.body.crawl_id,
      venue_id: req.body.venue_id,
    };

    Comment.findOneAndUpdate(filter, update, { new: true })
      .then(comment => res.json(comment).status(200))
      .catch(() => res.json({ error: "Comment not found" }).status(404))
  });

// Delete route for comment
router.delete('/:id', (req, res) => {

  const commentFilter = { _id: req.params.id };
  // deletes Crawl
  Comment.findOneAndRemove(commentFilter)
    .then(comment => res.status(200).json(comment))
    .catch(() => res.status(404).json({ error: "Comment not found" })
    )
});

module.exports = router;