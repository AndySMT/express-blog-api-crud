const express = require("express"); // Import express
const router = express.Router(); // Create instance of express router
const posts = require("../dataBase/postsData"); // Import posts data
const { index, show, destroy } = require("../controllers/postController");

// Rotta GET for all posts
router.get("/", index);
// Rotta GET for one post
router.get("/:id", show);
// Rotta DELETE for one post
router.delete("/:id", destroy);

module.exports = router;
