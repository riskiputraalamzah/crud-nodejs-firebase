const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoute");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the User API");
});
app.use("/users", userRoutes);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
