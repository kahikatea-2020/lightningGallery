const knex = require('knex')
const config = require('../knexfile').development
const connection = knex(config)

// data for home page
function getTopics(db = connection) {
  return db('topics')
    .select()
}

function updateTopic(id, data, db = connection) {
  return db('topics')
    .where('id', id)
    .update(data)
}

function newTopic(data, db = connection) {
  return db('topics')
    .insert(data)
}

function getComments(data, db = connection) {
  return db('comments')
    .select()
}

function newComments(data, db = connection) {
  return db('comments')
    .insert(data)
}

module.exports = {
  getTopics,
  updateTopic,
  newTopic,
  newComments,
  getComments
}