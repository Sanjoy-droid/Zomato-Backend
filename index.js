const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.get("/v1/login", (req, res) => {
  res.send("Login here");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
