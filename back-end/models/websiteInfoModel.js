const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reqString = {
    type: String,
    required: true
};

const webInfoSchema = new schema({

    ilefDescription: reqString,
    service: {
        learners: reqString,
        trainers: reqString
    }
})
module.exports = mongoose.model('webInfo', webInfoSchema);