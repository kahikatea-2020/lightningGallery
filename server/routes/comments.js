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

// api/comments/topic/:id
router.get("/topic/:id", (req, res) => {
  const topicsId = Number(req.params.id);
  db.getTopicsComments(topicsId).then((result) => {
    res.json(result);
  })
})

module.exports = router;
