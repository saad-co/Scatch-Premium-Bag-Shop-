const mongoose = require("mongoose");
mongoose
    .connect("mongodb://127.0.0.1:27017/scatch")
    .then(function () {
        console.log("connected to mongodb server");
    })
    .catch(function (err) {
        console.log("err while connecting to mongodb::", err);
    })

module.exports = mongoose.connection;