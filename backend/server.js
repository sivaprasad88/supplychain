const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");
const PORT = "5000";

const users = require("./routes/api/users");

// Load User model
const User = require("./models/User");

app.use(cors());
app.options('*', cors());


// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

mongoose.connect('mongodb://127.0.0.1:27017/woi_supplychain', { useNewUrlParser: true })
    .then( () => console.log("Fucking success")).catch( err => console.log(err) );

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);