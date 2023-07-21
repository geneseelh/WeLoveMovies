const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:reviewId")
  .put(controller.update)
  .delete(controller.deleteReview)
  .all(methodNotAllowed); //sets up PUT and DELETE requests for /reviews/:reviewId endpoint

module.exports = router;
