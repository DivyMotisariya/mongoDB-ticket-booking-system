const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const fbStrategy = require("passport-facebook").Strategy;
const HOSTNAME = process.env.HOSTNAME,
  PORT = process.env.PORT;

const { User } = require("../models");
const { successResData, errorRes } = require("../helpers/apiResponses");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

let userProfile,
  profile = {};

passport.use(
  new googleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // callbackURL: `http://${HOSTNAME}:${PORT}/api_v1.0/auth/google/callback`,
      callbackURL: process.env.GOOGLE_CB_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(accessToken);
      // console.log(refreshToken);
      console.log(profile);
      userProfile = profile;
      userProfile.token = accessToken;
      done(null, profile);
    }
  )
);

passport.use(
  new fbStrategy({
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
      // callbackURL: `http://${HOSTNAME}:${PORT}/api_v1.0/auth/google/callback`,
      callbackURL: process.env.FB_CB_URL,
      profileFields: ["id", "displayName", "name", "emails", "photos"],
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(accessToken);
      // console.log(refreshToken);
      console.log(profile);
      userProfile = profile;
      userProfile.token = accessToken;
      done(null, profile);
    }
  )
);

const welcomeRedirect = (req, res) => {
  profile.userID = userProfile.id;
  profile.provider = userProfile.provider;
  profile.displayName = userProfile.displayName;
  profile.name = userProfile.name;
  profile.emails = userProfile.emails;
  profile.token = userProfile.token;
  // console.log(profile);
  User.find({
      userID: profile.userID,
      provider: profile.provider,
    })
    .select({ displayName: 1, _id: 0 })
    .exec()
    .then((docs) => {
      if (docs.length > 0) throw new Error("Account exists");
      else {
        User.create(profile, (err, doc) => {
          if (err) throw err;
          // else successResData(res, "User saved", doc);
          res.render("welcome", {
            username: profile.displayName,
            profile: [profile.provider, profile.displayName],
          });
        });
      }
    })
    .catch((err) => {
      // console.log(err.message);
      errorRes(res, err.message);
    });
};

module.exports = { passport, welcomeRedirect };