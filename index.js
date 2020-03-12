var express = require("express");
var app = express();

app.get("/", function(rew, res){
    res.render("hello, world");
});

app.get("/*", function(rew, res){
    res.render("page not found");
});

app.listen(process.env.PORT, function(){
    console.log("Server is running");
})