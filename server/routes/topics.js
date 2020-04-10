const router = require("express").Router();
const db = require("../db");

// api/topics/
router.get("/", (req, res) => {
  db.getTopics().then((topics) => res.json(topics));
});

// api/topics/new
router.post("/new", (req, res) => {
  db.newTopic(req.body).then(() => res.json(true));
});

// api/topics/update
router.post("/update/:id", (req, res) => {
  const topicId = Number(req.params.id);
  db.updateTopic(topicId, req.body).then(() => {
    res.json(true);
  });
});

// api/topics/:id/
router.get("/:id", (req, res) => {
  db.getTopic(req.params.id).then((topic) => res.json(topic));
});

module.exports = router;
