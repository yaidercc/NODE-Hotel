const {
    Router
} = require("express");
const router = Router();
const roomsControllers = require("../controllers/rooms.controllers");

router.get("", [], roomsControllers.getRooms);
router.get("", [], roomsControllers.getRoom);
router.post("", [], roomsControllers.createRoom);
router.put("", [], roomsControllers.updateRoom);
router.delete("", [], roomsControllers.deleteRoom);

module.exports = router;