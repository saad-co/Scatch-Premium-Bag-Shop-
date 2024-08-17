const mongoose = require("mongoose");
const config = require("config");
mongoose
    .connect(`${config.get("MONGODB_URI")}/scatch`)
    .then(function () {
        console.log("connected to mongodb server");
    })
    .catch(function (err) {
        console.log("err while connecting to mongodb::", err);
    })

module.exports = mongoose.connection;