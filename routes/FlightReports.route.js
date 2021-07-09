const {
  flightReportsController: {
    showAllReports,
    addNewReport,
    updateReport,
    deleteReport,
  },
} = require("../controllers");

const router = require("express").Router();

router.get("/", showAllReports);
router.post("/", addNewReport);
router.put("/update/:id", updateReport);
router.delete("/delete/:id", deleteReport);

module.exports = router;