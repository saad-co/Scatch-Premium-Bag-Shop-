const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
    const error = req.flash("error");
    res.render("index", { error, loggedIn: false });
})


router.get("/shop", isLoggedIn, async function (req, res) {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", { products, success });
})
router.get("/cart", isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email }).populate("cart");

    res.render("cart", { user });
})
router.get("/addtocart/:id", isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email });
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success", "Product added to cart successfully");
    res.redirect("/shop");
})

module.exports = router;