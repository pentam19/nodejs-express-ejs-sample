const path = require("path");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false })); //req.body使うおまじない
app.use(express.static(path.join(__dirname, "public")));

// テンプレートエンジンの指定
app.set("view engine", "ejs");

app.get("/hello", function(req, res) {
  res.send("<h1>Hello World</h1>");
});

app.post("/api/message", function(req, res) {
  const message = req.body.message;
  if (message == "test") {
    // HTMLを直接書いて返す
    res.send("<h2>" + message + "!!" + "</h2>");
  } else if (message == "1") {
    // HTMLファイルを返す
    res.redirect("/message1.html");
  } else if (message == "2") {
    // HTMLファイルを返す
    res.redirect("/message2.html");
  } else {
    // テンプレートエンジンで生成したHTMLを返す
    res.render("./message-ejsdemo.ejs", {
      message: message
    });
  }
});

app.listen(3000, function() {
  console.log("running...");
});
