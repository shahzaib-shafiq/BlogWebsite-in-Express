//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare...";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque...";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices...";

const app = express();
const Posts = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render('home', { homeStarting: homeStartingContent, Posts: Posts });
});

app.get("/about", function(req, res) {
  res.render("about", { about: aboutContent });
});

app.get("/contact", function(req, res) {
  res.render("contact", { contact: contactContent });
});

app.get("/compose", function(req, res) {
  res.render("compose");

})

app.post("/compose", function(req, res) {
  var composeTitle = req.body.composeTitle;
  var composeText = req.body.composeText;
  var ComposeArea = {
    Title: composeTitle,
    Text: composeText
  };

  Posts.push(ComposeArea);
  res.redirect("/");
});

app.get("/posts/:postName", function(req, res) {
  const RequestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.Title,
        content: post.Text
      });
    }
  });

});




app.listen(3000, function() 
{
  console.log("Server started on port 3000");
});

//
//Challenge 20 Completed
