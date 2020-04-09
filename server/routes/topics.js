const router = require("express").Router()
const db = require('../db')

router.get("/", (req, res) => {
  db.getTopics()
    .then(topics => res.json(topics))
});

router.post('/new', (req, res) => {
  db.newTopic(req.body)
    .then(() => res.json(true))
})

module.exports = router;
