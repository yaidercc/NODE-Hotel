const {
    Router
} = require("express");
const router = Router();
const hotelsControllers = require("../controllers/hotels.controllers");

router.get("", [], hotelsControllers.getHotels);
router.get("/:id", [], hotelsControllers.getHotel);
router.post("", [], hotelsControllers.createHotel);
router.put("/:id", [], hotelsControllers.updateHotel);
router.delete("/:id", [], hotelsControllers.deleteHotel);

module.exports = router;