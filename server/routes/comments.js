const router = require("express").Router();
const db = require("../db");

// api/comments/
router.get("/", (req, res) => {
  db.getComments().then((Comments) => res.json(Comments));
});

// api/comments/new
router.post("/new", (req, res) => {
  db.newComments(req.body).then(() => res.json(true));
});

module.exports = router;
