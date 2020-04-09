
exports.up = (knex) => {
  return knex.schema.createTable('topics', table => {
    table.increments('id')
    table.string('topic')
    table.string('presenter')
    table.decimal('rating')
    table.string('url')
    table.string('description')
  })

};

exports.down = (knex) => {
  return knex.schema.dropTable('topics')
};
