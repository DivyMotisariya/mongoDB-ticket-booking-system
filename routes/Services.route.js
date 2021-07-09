const {
  servicesController: {
    showAllServices,
    addNewService,
    updateService,
    deleteService,
  },
} = require("../controllers");

const router = require("express").Router();

router.get("/", showAllServices);
router.post("/", addNewService);
router.put("/update/:id", updateService);
router.delete("/delete/:id", deleteService);

module.exports = router;