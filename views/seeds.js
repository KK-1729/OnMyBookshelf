var mongoose = require("mongoose");
var Book = require("../models/book.js")
var Comment = require("../models/comment");

var data = [
    {
        name: "Five on a hike together", 
        image: "https://upload.wikimedia.org/wikipedia/en/c/c4/FiveOnAHikeTogether.jpg",
        author: "Enid Blyton",
        description: "A half-term holiday enables Julian, Dick, Anne, George and Timmy to reunite and make off on a hiking tour. Hoping to make sleeping arrangements at Farmhouses and inns along the way, the children set off, only to have their plans interrupted by Timmy, who foolishly chases a rabbit and injures himself. George insists on him being seen by a Vet, and the children split up, only to be plunged into yet another thrilling adventure. Dick and Anne, when parted from Julian and George, manage to end up at the wrong Farmhouse, at which Dick receives a strange message in the middle of the night, actually intended for a man called 'Dirty Dick': a message which includes some key clues to a mystery...",
    },
    {
        name: "Five go to Smuggler's Top", 
        image: "https://upload.wikimedia.org/wikipedia/en/2/2d/FamousFive4.jpg",
        author: "Enid Blyton",
        description: "A half-term holiday enables Julian, Dick, Anne, George and Timmy to reunite and make off on a hiking tour. Hoping to make sleeping arrangements at Farmhouses and inns along the way, the children set off, only to have their plans interrupted by Timmy, who foolishly chases a rabbit and injures himself. George insists on him being seen by a Vet, and the children split up, only to be plunged into yet another thrilling adventure. Dick and Anne, when parted from Julian and George, manage to end up at the wrong Farmhouse, at which Dick receives a strange message in the middle of the night, actually intended for a man called 'Dirty Dick': a message which includes some key clues to a mystery...",
    },
    {
        name: "Five go off to Camp", 
        image: "https://upload.wikimedia.org/wikipedia/en/7/76/FamousFive7.jpg",
        author: "Enid Blyton",
        description: "A half-term holiday enables Julian, Dick, Anne, George and Timmy to reunite and make off on a hiking tour. Hoping to make sleeping arrangements at Farmhouses and inns along the way, the children set off, only to have their plans interrupted by Timmy, who foolishly chases a rabbit and injures himself. George insists on him being seen by a Vet, and the children split up, only to be plunged into yet another thrilling adventure. Dick and Anne, when parted from Julian and George, manage to end up at the wrong Farmhouse, at which Dick receives a strange message in the middle of the night, actually intended for a man called 'Dirty Dick': a message which includes some key clues to a mystery...",
    }
]

function seedDB() {
    Book.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("Removed the books and cleared the database");
        data.forEach(function(seed) {
            Book.create(seed, function(err, book) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Added a new book");
                    Comment.create(
                        {
                            text: "One of the best books I have ever read",
                            user: "KK"
                        }, function(err, comment) {
                            if(err) {
                                console.log(err);
                            } else {
                                book.comments.push(comment);
                                book.save();
                                console.log("Created a new comment");
                            }                               
                        }
                    );
                }
            });
        });
    });
}

module.exports = seedDB;

