const knex = require("knex");
const config = require("../knexfile").development;
const connection = knex(config);

// data for home page
function getTopics(db = connection) {
  return db("topics").select();
}

function updateTopic(id, data, db = connection) {
  return db("topics").where("id", id).update(data);
}

function newTopic(data, db = connection) {
  return db("topics").insert(data);
}

function getComments(data, db = connection) {
  return db("comments").select();
}

function newComments(data, db = connection) {
  return db("comments").insert(data);
}

function getTopicsComments(id, db = connection) {
  return db("topics")
    .join("comments", "topics.id", "comments.topics_id")
    .where("topics.id", id)
    .select();
}

module.exports = {
  getTopics,
  updateTopic,
  newTopic,
  newComments,
  getComments,
  getTopicsComments,
};
