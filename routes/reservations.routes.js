const {
    Router
} = require("express");
const router = Router();
const reservationsControllers = require("../controllers/reservation.controllers");

router.get("", [], reservationsControllers.getReservations);
router.get("", [], reservationsControllers.getReservation);
router.post("", [], reservationsControllers.createReservation);
router.put("", [], reservationsControllers.updateReservation);
router.delete("", [], reservationsControllers.deleteReservation);

module.exports = router;