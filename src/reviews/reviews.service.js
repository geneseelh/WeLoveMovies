const knex = require("../db/connection");

function destroy(reviewId) {
  return knex("reviews").where({ review_id: reviewId }).del();
}

function read(reviewId) {
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

async function update(updatedReview) {
  await knex("reviews")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview);

  return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .first();
}

function readCritic(criticId) {
  return knex("critics").select("*").where({ critic_id: criticId }).first();
}

module.exports = {
  destroy,
  read,
  update,
  readCritic,
};
