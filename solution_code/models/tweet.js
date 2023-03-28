// file name is usually singular cause we are building the module for tweet

// import our db connection
const {mongoose} = require("../db/connection");
// 2 dots go from model folder to solution folder then go to db folder

// import Schema
const Schema = mongoose.Schema;

// create a tweet Schema
const tweetSchema = new Schema({
    title: String,
    body: String,
    author: String,
    likes: {type: String, default: 0},
    sponsored: {type: Boolean, default: false}
}, {timestamps: true})

// create Tweet model
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;