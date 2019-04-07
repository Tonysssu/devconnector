const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const post = require("./routes/api/post");

const app = express();

const db = require("./config/key").mongoURI;

//connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello!!!"));

//routes api
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/post", post);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
