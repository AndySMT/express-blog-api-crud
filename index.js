const express = require("express"); // Import express
const app = express(); // Create instance of express
const port = 3000; // Set port
const router = require("./routes/postsRoutes"); // Import posts routes
const carsRouter = require("./routes/carsRoutes"); // Import cars routes

app.use(express.static("public")); // Server static files

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the home page",
    try: {
      posts: "/posts",
      Image: "/images/cracker_barbabietola.jpeg",
      cars: "/cars",
    },
  });
});

app.use("/", router); // Use posts routes
app.use("/", carsRouter); // Use cars routes

app.all("*", (req, res) => {
  res.status(404).json({
    error: 404,
    message: "This page doesn't exist",
  });
});

app.listen(port, () => {
  console.log(`Server is running on 127.0.0.1:${port}`);
}); // Start server and listen on port 3000
