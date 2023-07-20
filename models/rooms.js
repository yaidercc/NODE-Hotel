const {
    model,
    Schema
} = require("mongoose");

const room = Schema({
    type: {
        type: String
    },
    beds: {
        type: Number,
        default: 1
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array
    },
    view: {
        type: String,
    },
    pricePerNight: {
        type: Number,
    }
})

module.exports = model("room", room);