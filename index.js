const express = require("express");
const app = express();
const PORT = 5000;
const user = require("./routes/user.js");
const cookieParser = require("cookie-parser");
const cookieValidator = require("./cookieValidator.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.send("Hello ab");
  res.sendFile(index.html);
});

// user routes from different file
app.use("/user", user);

// cookie validator function

async function validateCookies(req, res, next) {
  await cookieValidator(req.cookies);
  next();
}

app.use(cookieParser());

app.use(validateCookies);

// req paramas from url
app.get("/user/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});
// useFul req for params (. or -)
app.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

// callback or callback array function call on request
app.get(
  "/call",
  (req, res, next) => {
    res.send("call 1 called");
    next();
  },
  (req, res) => {
    res.send("next called");
  }
);

const cb1 = function (req, res, next) {
  res.send("callback 1 called");
  next();
};
const cb2 = function (req, res, next) {
  res.send("callback 2 also called");
  //   next();
};

// app.get("/callback", cb1);
// array of callbacks
app.get("/callback", [cb1, cb2]);

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
