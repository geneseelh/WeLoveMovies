const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(req, res, next) {
  const { reviewId } = req.params;
  const review = await reviewsService.read(reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: `Review cannot be found.` });
}

async function deleteReview(req, res) {
  await reviewsService.destroy(res.locals.review.review_id);
  res.sendStatus(204);
}

async function update(req, res) {
  const reviewToUpdate = res.locals.review;

  if (!reviewToUpdate) {
    return res.status(404).json({ error: "Review cannot be found." });
  }

  const updatedReview = {
    ...reviewToUpdate,
    ...req.body.data,
  };

  const updatedReviewWithCritic = await reviewsService.update(updatedReview);
  const critic = await reviewsService.readCritic(updatedReview.critic_id);

  const response = {
    data: {
      ...updatedReviewWithCritic,
      critic: critic,
    },
  };
  res.json(response);
}

module.exports = {
  deleteReview: [reviewExists, asyncErrorBoundary(deleteReview)],
  update: [reviewExists, asyncErrorBoundary(update)],
};
