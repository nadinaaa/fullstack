const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const keys = require("../config/keys");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwtKey,
};

module.exports = (passport) =>
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.userId).select("email id");

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    })
  );
