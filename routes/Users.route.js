const {
  showUsers,
  addUser,
  deleteUser,
} = require("../controllers/Users.controller");

const router = require("express").Router();

router.get("/", showUsers);
router.post("/", addUser);
router.delete("/delete", deleteUser);

module.exports = router;