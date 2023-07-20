const {
    model,
    Schema
} = require("mongoose");


const hotel = Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    images: {
        type: String,
    }
})

module.exports = model('hotel', hotel)