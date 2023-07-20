const {
    model,
    Schema
} = require("mongoose");

const reservation = Schema({
    roomId: {

    },
    userId: {},
    checkInDate: {},
    checkOutDate: {},
    guests: {},
    totalPrice: {},
    paymentStatus: {},
    bookingDate: {},
    isConfirmed: {},
    isCancelled: {},
    cancelledDate: {},
    notes: {}
})

module.exports = model("reservation", reservation)