const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../Models/user.js");
const wrapAsync = require("../utils/wrapAsync");

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({
        username,
        email,
      });
      await User.register(newUser, password);
      req.flash("success", `Hey ${username} - Welcome To Wandurlust !`);
      res.redirect("/listings");
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/signup");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async (req, res) => {
  req.flash("success", "Welcome Back To Wandurlust!");
  res.redirect("/listings");
});

module.exports = router;
