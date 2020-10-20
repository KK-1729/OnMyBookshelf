var mongoose = require("mongoose");

// Mongo Schema Setup
var bookSchema = new mongoose.Schema({
    name: String,
    image: String,
    author: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

// Compiling Schema to model
module.exports = mongoose.model("Book", bookSchema);