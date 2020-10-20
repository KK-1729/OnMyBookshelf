var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStategy = require("passport-local");
var Book = require("./models/book");
var Comment = require("./models/comment");
var User = require("./models/user")

mongoose.connect("mongodb+srv://Karthik:Karthik123@onmybookshelf.57xdn.mongodb.net/OnMyBookshelf?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({
    extended: true, 
    useUnifiedTopology: true
}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.locals.moment = require('moment');

// AUTHENTICATION - PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "The best book blog",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next()
});

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
            res.render("books", {books: allBooks, currentUser: req.user});
        }
    });
});

// CREATE Route - to add new books to Database
app.post("/books", isLoggedIn, function(req, res) {
    // get data from form and add to books array
    var name = req.body.name;
    var image = req.body.image;
    var author = req.body.author;
    var desc = req.body.description;
    var user = {
        id: req.user._id,
        username: req.user.username
    }
    var newBook = {name: name, image: image, author: author, description: desc, user: user};
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
app.get("/books/new", isLoggedIn, function(req, res) {
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
            res.render("show", {book: foundBook});
        }
    });
});


// COMMENTS ROUTES

// POST Route - To add comments
app.post("/books/:id/comments", isLoggedIn, function(req, res) {
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
                    // add username and id to comment
                    comment.user.id = req.user._id;
                    comment.user.username = req.user.username;
                    comment.save();
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

// AUTHENTICATION ROUTES
// SHOW Route - to show registration form
app.get("/register", function(req, res) {
    res.render("register");
});

// Handling Sign Up Logic
app.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            alert("Invalid Credentials");
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/books");
        });
    });
});

// Showing login form 
app.get("/login", function(req, res) {
    res.render("login");
});

// Handling login logic
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/books",
        failureRedirect: "/login"
    }), function(req, res) {           
});

// Logout Route
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function() {
    console.log("The server has started");
});