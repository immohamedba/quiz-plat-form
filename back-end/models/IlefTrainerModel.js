const mongoose = require('mongoose');
const schema = mongoose.Schema;
const trainerSchema = new schema({
    _id: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    moreInf: {
        type: String
    }
}, { timestamps: true })
module.exports = mongoose.model('trainer', trainerSchema);