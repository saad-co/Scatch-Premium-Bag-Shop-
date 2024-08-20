const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController")


router.get("/", (req, res) => {
    res.send("its user route");
});

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/"); // Redirect to the login page or home page
});


module.exports = router;