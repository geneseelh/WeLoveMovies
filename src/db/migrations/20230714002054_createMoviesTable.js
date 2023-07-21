/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  //pass in name of table and a callback function
  return knex.schema.createTable("movies", (table) => {
    table.increments("movie_id").primary(); //sets movie_id as primary key
    table.string("title"); //sets title as string
    table.integer("runtime_in_minutes"); //sets runtime_in_minutes as integer
    table.string("rating"); //sets rating as string
    table.text("description"); //sets description as text
    table.string("image_url"); //sets image_url as string
    table.timestamps(true, true); //sets created_at and updated_at columns as timestamps
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movies"); //drops movies table
};
