const knex = require("../db/connection");

function listShowingMovies() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*")
    .where({ "mt.is_showing": true })
    .groupBy("m.movie_id");
}

function listShowingTheaters(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select("t.*")
    .where({ "mt.movie_id": movieId });
}

function listMovies() {
  return knex("movies").select("*");
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

async function listReviews(movieId) {
  const reviews = await knex("reviews as r")
    .join("movies as m", "r.movie_id", "m.movie_id")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("r.*", "c.*")
    .where({ "r.movie_id": movieId });

  return reviews.map((review) => {
    return {
      ...review,
      critic: {
        critic_id: review.critic_id,
        preferred_name: review.preferred_name,
        surname: review.surname,
        organization_name: review.organization_name,
      },
    };
  });
}

module.exports = {
  listShowingMovies,
  listShowingTheaters,
  listMovies,
  read,
  listReviews,
};
