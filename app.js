const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const BlogRoutes = require("./routes/BlogRoutes");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
const dbURI = process.env.URL_DB;
const Port = process.env.PORT;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(Port, () => {
      console.log("server listening on port 3000");
    });
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err, err.message);
  });

app.use((req, res, next) => {
  console.log("method: " + req.method);
  console.log("path: " + req.path);
  console.log("params: " + JSON.stringify(req.params));
  console.log("next cutie");
  next();
});

app.get("/", (req, res) => {
  res.redirect("/Blogs");
});

app.use("/Blogs", BlogRoutes);

app.get("/about", (req, res) => {
  res.render("about", { title: "About01" });
});

app.get("/about-us", (req, res) => {
  res.redirect("about");
});

app.use((req, res) => {
  res.status(404).render("404");
});
