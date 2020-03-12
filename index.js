var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// set the template engine to ejs
app.set('view engine', 'ejs');

// Tells node to look in css/ for styles
app.use(express.static("css"));

// makes data that comes to the server from the client a json object
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("home.ejs");
});

var friendList = ['Alice', 'Sean', 'Federico', 'Bob'];
app.get("/friends", function(req, res){
    res.render("friends.ejs", {friends: friendList}); 
});

app.post("/addFriend", function(req, res){
    var newFriend = req.body.newFriend;
    friendList.push(newFriend);
    res.redirect("/friends");
    console.log(req.body);
});

app.get("/*", function(req, res){
    res.render("error.ejs");
});

app.listen(process.env.PORT || 3000 || 8080, function(){
    console.log("Server is running");
});
