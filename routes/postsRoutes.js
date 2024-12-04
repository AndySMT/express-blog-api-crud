const express = require("express"); // Import express
const router = express.Router(); // Create instance of express router
const {
  index,
  show,
  destroy,
  error,
} = require("../controllers/postController");

// Rotta GET for all posts
router.get("/posts", index);
// Rotta GET for one post
router.get("/posts/:id", show);
// Rotta DELETE for one post
router.delete("/posts/:id", destroy);

module.exports = router;
