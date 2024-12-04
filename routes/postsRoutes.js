const express = require("express"); // Import express
const router = express.Router(); // Create instance of express router
const {
  index,
  show,
  destroy,
  error,
} = require("../controllers/postController");

// Rotta GET for all posts
router.get("/", index);
// Rotta GET for one post
router.get("/:id", show);
// Rotta DELETE for one post
router.delete("/:id", destroy);

// rotta per errore 404
router.all("*", error);

module.exports = router;
