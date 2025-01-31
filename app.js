const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8080, () => {
  console.log("Server started");
});
