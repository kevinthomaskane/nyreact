var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  
  title: {
    type: String,
    required: true,
    unique: true,
  },

  link: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  }
  
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;