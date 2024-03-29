const mongoose = require("mongoose");

const EcommSchema = mongoose.Schema({
    imageURL : {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    quantity: Number,
    cartStatus: Boolean
});

const Items = mongoose.model("items", EcommSchema);
module.exports = Items;