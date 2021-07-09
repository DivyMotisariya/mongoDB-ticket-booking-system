const router = require("express").Router();

// const signupRoute = require("../routes/Users.route");
// router.use("/user", signupRoute);

// Authorization route
// const authRoute = require("../routes/Login.route");

// router.use("/auth", authRoute);

const routesRoute = require("../routes/Routes.route");
router.use("/route", routesRoute);

const flightsRoute = require("../routes/Flights.route");
router.use("/flight", flightsRoute);

const ticketsRoute = require("../routes/Tickets.route");
router.use("/ticket", ticketsRoute);

const servicesRoute = require("../routes/Services.route");
router.use("/service", servicesRoute);

const passengersRoute = require("../routes/Passengers.route");
router.use("/passenger", passengersRoute);

const flightReportRoute = require("../routes/FlightReports.route");
router.use("/report", flightReportRoute);

module.exports = router;