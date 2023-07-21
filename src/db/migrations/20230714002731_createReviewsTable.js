/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary(); //sets review_id as primary key
    table.text("content"); //sets content as text
    table.integer("score"); //sets score as integer
    table.integer("critic_id").unsigned().notNullable(); //sets critic_id as integer, unsigned, and not nullable
    table
      .foreign("critic_id")
      .references("critics.critic_id")
      .onDelete("CASCADE"); //sets critic_id as foreign key, references critics table, and cascades on delete
    table.integer("movie_id").unsigned().notNullable(); //sets movie_id as integer, unsigned, and not nullable
    table.foreign("movie_id").references("movies.movie_id").onDelete("CASCADE"); //sets movie_id as foreign key, references movies table, and cascades on delete
    table.timestamps(true, true); //sets created_at and updated_at columns as timestamps
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("reviews"); //drops reviews table
};
