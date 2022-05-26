import mongoose from 'mongoose';
const { Schema } = mongoose;

const ContributorSchema = new Schema({
    Name : {
        type: String,
        required: true,
        unique: true,
    },
    emai: {
        type: String,
        required: true,
        unique: true,
    },
    password:  {
        type: String,
        required: true,
        unique: true,
    },
    usertag: String
  });

  module.exports = mongoose.model('contributor',ContributorSchema);