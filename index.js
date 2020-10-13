var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Book = require("./models/book");
var Comment = require("./models/comment");
var seedDB = require("./views/seeds");


seedDB();

mongoose.connect("mongodb://localhost/on_my_bookshelf", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({
    extended: true, 
    useUnifiedTopology: true
}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



// Book.create(
//     {
//         name: "Five on a hike together", 
//         image: "https://upload.wikimedia.org/wikipedia/en/c/c4/FiveOnAHikeTogether.jpg",
//         author: "Enid Blyton",
//         description: " A half-term holiday enables Julian, Dick, Anne, George and Timmy to reunite and make off on a hiking tour. Hoping to make sleeping arrangements at Farmhouses and inns along the way, the children set off, only to have their plans interrupted by Timmy, who foolishly chases a rabbit and injures himself. George insists on him being seen by a Vet, and the children split up, only to be plunged into yet another thrilling adventure. Dick and Anne, when parted from Julian and George, manage to end up at the wrong Farmhouse, at which Dick receives a strange message in the middle of the night, actually intended for a man called 'Dirty Dick': a message which includes some key clues to a mystery..."
//     },
//     function(err, book) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly added Book");
//             console.log(book);
//         }
//     }
// );

var books = [
    {name: "Five on a hike together", image: "https://upload.wikimedia.org/wikipedia/en/c/c4/FiveOnAHikeTogether.jpg"},
    {name: "Five go to Smuggler's Top", image: "https://upload.wikimedia.org/wikipedia/en/2/2d/FamousFive4.jpg"},
    {name: "Five go off to Camp", image: "https://upload.wikimedia.org/wikipedia/en/7/76/FamousFive7.jpg"},
    {name: "Five on a hike together", image: "https://upload.wikimedia.org/wikipedia/en/c/c4/FiveOnAHikeTogether.jpg"},
    {name: "Five on a hike together", image: "https://upload.wikimedia.org/wikipedia/en/c/c4/FiveOnAHikeTogether.jpg"},
    {name: "Five on a hike together", image: "https://upload.wikimedia.org/wikipedia/en/c/c4/FiveOnAHikeTogether.jpg"},
    {name: "Five on a hike together", image: "https://upload.wikimedia.org/wikipedia/en/c/c4/FiveOnAHikeTogether.jpg"},
]

app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX Route - to show all books
app.get("/books", function(req, res) {
    // Get all books from Database
    Book.find({}, function(err, allBooks) {
        if(err) {
            console.log(err);
        } else {
            res.render("books/books", {books: allBooks});
        }
    });
});

// CREATE Route - to add new books to Database
app.post("/books", function(req, res) {
    // get data from form and add to books array
    var name = req.body.name;
    var image = req.body.image;
    var author = req.body.author;
    var desc = req.body.description;
    var newBook = {name: name, image: image, author: author, description: desc};
    // Add a new book and save it to Database
    Book.create(newBook, function(err, newlyAdded) {
        if(err) {
            console.log(err);
        } else {
            // redirect back to books page
            res.redirect("/books");
        }
    });
});

// NEW Route - form to add a new book
app.get("/books/new", function(req, res) {
    res.render("newbook");
});

// SHOW Route - to show details of a particular book
app.get("/books/:id", function(req, res) {
    // Find the book with the provided ID
    Book.findById(req.params.id).populate("comments").exec(function(err, foundBook) {
        if(err) {
            console.log(err);
        } else {
            console.log(foundBook);
            // Show the template consisting of details for that particular book
            res.render("books/show", {book: foundBook});
        }
    });
});


// COMMENTS ROUTES

// SHOW Route - To show Comment form
app.get("/books/:id/comments/new", function(req, res) {
    // find the book by id
    Book.findById(req.params.id, function(err, book) {
        if(err) {
            console.log(err);
        } else {
            res.render("comments/new", {book: book});
        }
    });
});

// POST Route - To add comments
app.post("/books/:id/comments", function(req, res) {
    // find the book using the id
    Book.findById(req.params.id, function(err, book) {
        if(err) {
            console.log(err);
            res.redirect("/books");
        } else {
            Comment.create(req.body.comment, function(err, comment) {
                if(err) {
                    console.log(err);
                } else {
                    book.comments.push(comment);
                    book.save();
                    res.redirect("/books/" + book._id);
                }
            });
        }
    });
    // creating new comment
    // connect the new comment to book
    // redirect the book show page
});

app.listen(3000, function() {
    console.log("The server has started");
});