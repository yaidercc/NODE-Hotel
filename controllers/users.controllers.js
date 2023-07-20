const Users = require("../models/users");
const bcryptjs = require("bcryptjs")
const getUsers = async (req, res) => {
    try {
        const users = await Users.find({
            status: true
        });
        return res.status(400).json({
            ok: true,
            users
        })
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        })
    }
}

const getUser = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const user = await Users.findById(id);
        if (!user) {
            return res.status(400).json({
                ok: false,
                error: "Usuario no encontrado"
            })
        }
        return res.json({
            ok: true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        })
    }
}

const createUser = async (req, res) => {

    const {
        email,
        password,
        role,
        ...body
    } = req.body;

    try {
        const user = new Users({
            name: body.name.toUpperCase(),
            last_name: body.last_name.toUpperCase(),
            email,
            password,
            role
        })

        const salt = bcryptjs.genSaltSync()
        user.password = bcryptjs.hashSync(password, salt);

        await user.save()

        return res.json({
            ok:true,
            user
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error
        })
    }
}

const updateUser = async (req, res) => {}

const deleteUser = async (req, res) => {}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}