var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    question: { type: String, required: [true, 'question required'], minlength: 10 },
    description: {type: String},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
});
var Question = mongoose.model('Question', QuestionSchema);

var AnswerSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name required'], minlength: 2 },
    answer: { type: String, required: [true, 'question required'], minlength: 5 },
    support: { type: String},
    likes: {type: Number, default: 0},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'},
});
var Answer = mongoose.model('Answer', AnswerSchema);