const {
  routesController: {
    showAllRoutes,
    addNewRoute,
    updateRoute,
    deleteRoute,
  }
} = require("../controllers");

const router = require("express").Router();

router.get("/", showAllRoutes);
router.post("/", addNewRoute);
router.put("/update/:id", updateRoute);
router.delete("/delete/:id", deleteRoute);

module.exports = router;