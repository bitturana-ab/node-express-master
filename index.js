const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.send("Hello ab");
  res.sendFile(index.html);
});

// req paramas from url
app.get("/user/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});

// handle the post method of client
app.post("/", (req, res) => {
  res.send("you got it with post method");
});

// handle put req
app.put("/user", (req, res) => {
  res.send("user saved");
});

// handle 404 response
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
