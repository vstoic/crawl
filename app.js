const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const crawls = require("./routes/api/crawls");
const venues = require("./routes/api/venues");
const comments = require("./routes/api/comments");
const votes = require("./routes/api/votes")
const bodyParser = require("body-parser");
const passport = require("passport");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/crawls", crawls);
app.use("/api/venues", venues);
app.use("/api/comments", comments);
app.use("/api/votes", votes);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));
