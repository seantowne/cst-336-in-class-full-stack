var express = require("express");
var app = express();

app.get("/", function(rew, res){
    res.send("hello, world");
});

app.get("/*", function(rew, res){
    res.send("page not found");
});

app.listen(process.env.PORT, function(){
    console.log("Server is running");
})