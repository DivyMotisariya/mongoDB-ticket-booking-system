const {
  ticketsController: {
    showAllTickets,
    addNewTicket,
    updateTicket,
    deleteTicket,
  },
} = require("../controllers");

const router = require("express").Router();

router.get("/", showAllTickets);
router.post("/", addNewTicket);
router.put("/update/:id", updateTicket);
router.delete("/delete/:id", deleteTicket);

module.exports = router;