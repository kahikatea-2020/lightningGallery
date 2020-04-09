const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("do something in get route");
});

module.exports = router;
