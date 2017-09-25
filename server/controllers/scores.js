var mongoose = require('mongoose');
var Score = mongoose.model('Score');
var Question = mongoose.model('Question');

module.exports = {
    showScores: function (req, res){
        Score.find({}, function (err, scores){
        if(!err){
            console.log("successful loaded all inside the server scores.js show")
            res.json(scores);
        }
        else{
            console.log("error");
            console.log(err);
            res.json(err);
        }
        })
    },

    showQuestions: function (req, res){
        Question.find({}, function (err, questions){
        if(!err){
            console.log("successful loaded all inside the server scores.js show")
            res.json(questions);
        }
        else{
            console.log("error");
            console.log(err);
            res.json(err);
        }
        })
    },


    create: function (req, res){
        var newQuestion = new Question(req.body);
        console.log("im inside scores.js create", req.body)
        newQuestion.save(function (err, data){
            if(err) {
                console.log(err);
                res.status(400).json({message:"unable to add question"});
            }
            console.log("successful post:", data)
            res.json();
        })
    },
  

    addScore: function (req, res){
        console.log("im in side scores.js create", req.body)
        Score.create(req.body, function (err, data){
            if(err) {
                console.log(err);
                res.status(400).json({message:"unable to add score"});
            }
            console.log("successful post:", data)
            res.json(true);
        })
    },
}


