const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/BlogController");
router.get("/", BlogController.Blog_index);
router.get("/create", BlogController.Blog_Create_Here);
router.post("/", BlogController.Post_index);
router.get("/:id", BlogController.Blog_details);
router.delete("/:id", BlogController.Blog_delete);

module.exports = router;
