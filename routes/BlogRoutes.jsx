const express = require("express");
const router = express.Router();
const Blog = require("./models/Blog");

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "AllBlogs", blogs: result });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.post("/", (req, res) => {
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
app.get("/add-blog", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Detail" });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
