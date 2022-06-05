const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContributorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    usertag: {
        type: String,
        required: true,
    }
});

const Contributor = mongoose.model('contributor', ContributorSchema);
// Contributor.createIndexes();
module.exports = Contributor

