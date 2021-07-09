const {
  passengersController: {
    showAllPassengers,
    addNewPassenger,
    updatePassenger,
    deletePassenger
  }
} = require("../controllers");

const router = require("express").Router();

router.get("/", showAllPassengers);
router.post("/", addNewPassenger);
router.put("/update/:id", updatePassenger);
router.delete("/delete/:id", deletePassenger);

module.exports = router;