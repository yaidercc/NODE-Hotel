const {
    Schema,
    model
} = require("mongoose")

const user = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    last_name: {
        type: String,
        required: [true, 'Los apellidos son obligatorios'],
    },
    email: {
        type: String,
        required: [true, 'El email debe ser obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "USER_ROLE",
        enum: ["ADMIN_ROLE", "EMPLOYEE_ROLE", "USER_ROLE"]
    },
    picture:{
        type:String
    },
    creditCard: {
        type: Object,
    },
    status: {
        type: Boolean,
        default: true
    }
})

user.methods.toJSON = function () {
    const {
        __v,
        password,
        _id,
        ...user
    } = this.toObject();
    return {
        uuid: _id,
        ...user
    };
}

module.exports = model('user', user);