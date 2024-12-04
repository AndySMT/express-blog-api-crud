const express = require("express"); // Import express
const app = express(); // Create instance of express
const port = 3000; // Set port
const posts = require("./dataBase/postsData"); // Import posts data //!(forse non necessario)
const router = require("./routes/postsRoutes"); // Import posts routes

app.use(express.static("public")); // Server static files

app.use("/", router); // Use posts routes

app.get("*", (req, res) => {
  res.status(404).send("<h1>Error 404: Page Not Found</h1>");
}); // 404 page for invalid routes

app.listen(port, () => {
  console.log(`Server is running on 127.0.0.1:${port}`);
}); // Start server and listen on port 3000
