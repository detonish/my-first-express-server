const express = require("express")

const app = express();

app.get("/", function (req,res){
  res.send("<h1>Hello, World</h1>");
});

app.get("/contact", function (req,res){
  res.send("Contact me at aragonpalma.nico@gmail.com");
});

app.get("/about", function (req,res){
  res.send("I'm Nico! A junior web developer learning Vue.js and React.js, i love beer and coding.");
});



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
