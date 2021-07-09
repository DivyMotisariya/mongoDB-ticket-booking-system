const { passport, welcomeRedirect } = require("../controllers/Login.controller");

const router = require("express").Router();

router.use(passport.initialize());

router.get("/", (req, res) => {
  res.render("login");
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/welcome",
    failureRedirect: "/auth/fail",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/auth/welcome",
    failureRedirect: "/auth/fail",
  })
);

router.get("/welcome", welcomeRedirect);

router.get("/fail", (req, res) => {
  res.status(400).send("Authentication Failed");
});

module.exports = router;