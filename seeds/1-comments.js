const table = 'comments'
exports.seed = function (knex) {
  return knex(table).del()
    .then(function () {
      return knex(table).insert([
        { id: 1, topics_id: 1, comments: 'Chris loves korean girls' }
      ])
    })
};