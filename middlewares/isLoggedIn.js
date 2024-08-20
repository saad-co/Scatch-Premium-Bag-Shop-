const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports = async function (req, res, next) {
    try {
        if (!req.cookies?.token) {
            req.flash("error", "You need to login first");
            return res.redirect("/");
        }
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel.findOne({ email: decoded.email }).select("-password");
        req.user = user;
        next();
    }
    catch (err) {
        console.log("error message is:", err.message);
        req.flash("error", "something went wronge on the protected middleware");
        res.redirect("/");
    }
}