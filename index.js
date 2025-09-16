const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello ab");
});
// handle the post method of client
app.post("/", (req, res) => {
  res.send("you got it with post method");
});

// handle put req
app.put("/user", (req, res) => {
  res.send("user saved");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
