const express = require("express"); // Import express
const app = express(); // Create instance of express
const port = 3000; // Set port
const router = require("./routes/postsRoutes"); // Import posts routes

app.use(express.static("public")); // Server static files

app.use("/", router); // Use posts routes
app.use("*", router);

app.listen(port, () => {
  console.log(`Server is running on 127.0.0.1:${port}`);
}); // Start server and listen on port 3000
