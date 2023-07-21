/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("critics", (table) => {
    table.increments("critic_id").primary(); //sets critic_id as primary key
    table.string("preferred_name"); //sets preferred_name as string
    table.string("surname"); //sets surname as string
    table.string("organization_name"); //sets organization_name as string
    table.timestamps(true, true); //sets created_at and updated_at columns as timestamps
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("critics"); //drops critics table
};
