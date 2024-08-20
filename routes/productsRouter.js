const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/productModel");

router.post("/create", upload.single("image"), async (req, res) => {
    try {
        let { panelcolor, textcolor, name, bgcolor, discount, price } = req.body;

        // Validate input data here if necessary

        let product = await productModel.create({
            image: req.file.buffer,  // Ensure the image is properly uploaded
            panelcolor,
            textcolor,
            name,
            bgcolor,
            discount,
            price
        });

        req.flash("success", "Product created successfully");
        res.redirect("/owners/admin");
    }
    catch (err) {
        console.error("Error creating product:", err);  // Log error for debugging
        req.flash("error", "There was an issue creating the product. Please try again.");
        res.redirect("/owners/admin");  // Redirect to a relevant route with an error message
    }
});


module.exports = router;