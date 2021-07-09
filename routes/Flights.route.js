const {
  flightsController: {
    showAllFlights,
    addNewFlight,
    updateFlight,
    deleteFlight
  }
} = require("../controllers");

const router = require("express").Router();

router.get("/", showAllFlights);
router.post("/", addNewFlight);
router.put("/update/:id", updateFlight);
router.delete("/delete/:id", deleteFlight);

module.exports = router;