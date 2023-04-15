const Blog = require("../models/Blog");
const Blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "AllBlogs", blogs: result });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const Post_index = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => {
      res.redirect("/blogs");
      console.log("saved succ");
    })
    .catch((err) => {
      console.log(err.messages);
    });
};
const Blog_details = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  res.render("details", { title: "BlogDetails", blog }); //
}; //
const Blog_delete = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findByIdAndDelete(id);
  console.log(blog);
  res.json({ redirect: "/Blogs" });
};
const Blog_Create_Here = (req, res) => {
  res.render("create", { title: "Create a new blog" });
}; //
module.exports = {
  Blog_index,
  Post_index,
  Blog_details,
  Blog_delete,
  Blog_Create_Here,
};
