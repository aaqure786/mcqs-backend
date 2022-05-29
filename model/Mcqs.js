const mongoose =  require('mongoose');
const { Schema } = mongoose;

const McqsSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true,
    },
    usertag: {
        type: String,
        required: true,
        unique: true,
    },
    category:  {
        type: String,
        required: true,
        unique: true,
    },
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
    answer: String,
    explanation: String
  });

  module.exports = mongoose.model('mcqs',McqsSchema);