const mongoose = require('mongoose');

const Auth = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    role: {
        type: String,
        default: "user"
    },
    order: {
        type: Array,
        default: []
    },
    image: {
        type: Object,
        default: {
            url: "https://www.pixsy.com/academy/image-user/verify-image-source-copyright-owner/"

        }
    }

}, {
    collection: "users",
    timestamps: true
})
module.exports = mongoose.model("Auth",Auth)