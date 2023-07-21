/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("theaters", (table) => {
    table.increments("theater_id").primary(); //sets theater_id as primary key
    table.string("name"); //sets name as string
    table.string("address_line_1"); //sets address_line_1 as string
    table.string("address_line_2"); //sets address_line_2 as string
    table.string("city"); //sets city as string
    table.string("state"); //sets state as string
    table.string("zip"); //sets zip as string
    table.timestamps(true, true); //sets created_at and updated_at columns as timestamps
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("theaters"); //drops theaters table
};
