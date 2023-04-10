const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const dbURI =
  "mongodb+srv://Youcef-Mantas:eeM1wiZSeck0phZc@cluster0.duxfya8.mongodb.net/test";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    console.log("conneted succecefully");
  })
  .catch((err) => {
    console.log(err, err.message);
  }); //
app.use((res, req, next) => {
  console.log("method: " + req.method);
  console.log("path: " + req.path);
  console.log("params: " + req.params);
  console.log("next cutie");
  next();
});
app.get("/add-blog", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.redirect("/Blogs");
});

app.get("/Blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "AllBlogs", blogs: result });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
app.post("/Blogs", (req, res) => {
  const blogs = new Blog(req.body);
  blogs
    .save()
    .then((result) => {
      res.redirect("/Blogs");
    })
    .catch((err) => {
      console.log(err.message);
    });
});
app.get("/Blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Detail" });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About01" });
});
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/about-us", (req, res) => {
  res.redirect("about");
});
app.use((req, res) => {
  res.status(404).render("404");
});
///////////////
