const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: Buffer,
    panelcolor: String,
    textcolor: String,
    bgcolor: String,
    discount: {
        type: Number,
        default: 0
    },
    price: Number,
    image: String
})

module.exports = mongoose.model("product", productSchema);