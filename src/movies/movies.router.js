const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed); //sets up GET request for /movies endpoint

router.route("/:movieId").get(controller.read).all(methodNotAllowed); //sets up GET request for /movies/:movieId endpoint

router
  .route("/:movieId/theaters")
  .get(controller.listTheaters)
  .all(methodNotAllowed); //sets up GET request for /movies/:movieId/theaters endpoint

router
  .route("/:movieId/reviews")
  .get(controller.listReviews)
  .all(methodNotAllowed); //sets up GET request for /movies/:movieId/reviews endpoint

module.exports = router;
