var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 3001

var databaseUri = "mongodb://localhost/nytreact";

if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect(databaseUri)
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var database = mongoose.connection;
var db = require("./models/Article.js");

database.on('error', function(err){
  console.log("Mongoose Error: ", err);
});

database.once("open", function(){
  console.log("mongoose connection successful");
});

require("./routes/api.js")(app, db, express);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
