const Users = require("../models/users")
const emailExists = async (email = '') => {
    const existsEmail = await Users.findOne({
        email
    });
    if (existsEmail) throw new Error(`El correo ${email} ya se encuentra registrado`);
}
const isValidRole = async (role = '') => {
    const Roles = ["ADMIN_ROLE", "EMPLOYEE_ROLE", "USER_ROLE"];
    if (!Roles.includes(role)) throw new Error(`El rol ${role} no existe en la base de datos.`)
}
module.exports = {
    emailExists,
    isValidRole
}