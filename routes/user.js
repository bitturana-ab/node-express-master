const express = require("express");
// const router = express.Router;
const router = express.Router({ mergeParams: true });

const userRoute = (req, res, next) => {
  res.send("Date: ", Date.now());
  next();
};

// router.use(userRoute);

// home route for user
router.get("/", (req, res) => {
  res.send("user home");
});
router.get("/about", (req, res) => {
  res.send("use about page");
});

module.exports = router;
