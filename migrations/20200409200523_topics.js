exports.up = (knex) => {
  return knex.schema.createTable("topics", (table) => {
    table.increments("id").primary();
    table.string("title");
    table.string("presenter");
    table.string("url");
    table.string("description");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("topics");
};
