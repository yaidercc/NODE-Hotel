const {
    Router
} = require("express");
const {
    check
} = require("express-validator")
const router = Router();
const usersControllers = require("../controllers/users.controllers");
const validarCampos = require("../middlewares/validar-campos");
const dbValidators = require("../helpers/db-validator");

router.get("/", [validarCampos], usersControllers.getUsers);
router.get("/", [validarCampos], usersControllers.getUser);
router.post("/", [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("last_name", "El apellido es obligatorio").not().isEmpty(),
    check("email", "El correo esta vacio o es incorrecto").isEmail(),
    check("email").custom(dbValidators.emailExists),
    check("password", "La clave es obligatoria o no cumple con los requisitos").isStrongPassword(),
    check("role").custom(dbValidators.isValidRole),
    validarCampos
], usersControllers.createUser);
router.put("/", [validarCampos], usersControllers.updateUser);
router.delete("/", [validarCampos], usersControllers.deleteUser);

module.exports = router;