
exports.up = (knex) => {
  return knex.schema.createTable('comments', table => {
    table.increments('id')
    table.integer('topics_id').references('topics.id')
    table.decimal('rating')
    table.string('comments')
  })

};

exports.down = (knex) => {
  return knex.schema.dropTable('comments')
};
