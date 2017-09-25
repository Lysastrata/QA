var mongoose = require('mongoose');

var ScoreSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name required'], minlength: 2 },
    score: {type: Number}
});
var Score = mongoose.model('Score', ScoreSchema);
var QuestionSchema = new mongoose.Schema({
    question: { type: String, required: [true, 'question required'], minlength: 2 },
    correct: {type: String, required: [true, 'correct answer required'], minlength: 2 },
    wrong: {type: String, required: [true, 'wrong answer required'], minlength: 2 },
    fake: {type: String, required: [true, 'wrong answer required'], minlength: 2 }
});
var Question = mongoose.model('Question', QuestionSchema);
