/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movies_theaters", (table) => {
    table.integer("movie_id").unsigned().notNullable(); //sets movie_id as integer, unsigned, and not nullable
    table.foreign("movie_id").references("movies.movie_id").onDelete("CASCADE"); //sets movie_id as foreign key, references movies table, and cascades on delete
    table.integer("theater_id").unsigned().notNullable(); //sets theater_id as integer, unsigned, and not nullable
    table
      .foreign("theater_id")
      .references("theaters.theater_id")
      .onDelete("CASCADE"); //sets theater_id as foreign key, references theaters table, and cascades on delete
    table.boolean("is_showing"); //sets is_showing as boolean
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movies_theaters"); //drops movies_theaters table
};
