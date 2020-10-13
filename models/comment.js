var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    user: String
});

module.exports = mongoose.model("Comment", commentSchema);