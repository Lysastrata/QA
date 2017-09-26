var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {
    showOne: function (req, res){
        console.log("inside server showOne")
        Question.findOne({_id: req.params.id})
            .populate('answers')
            .exec(function(err, question){
            if(!err){
            res.json(question);
        }else{
            console.log(err);
            res.json(err);
        }
        })
    },

    showAll: function (req, res){
        Question.find({}, function (err, questions){
        if(!err){
            console.log("successful loaded all inside the server qs.js question");
            console.log(questions);
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
        console.log("im inside qs.js create", req.body)
        newQuestion.save(function (err, data){
            if(err) {
                console.log(err);
                res.status(400).json({message:"unable to add question"});
            }
            console.log("successful post:", data)
            res.json();
        })
    },
  

    add: function (req, res){
        console.log("im in side qs.js create", req.body)
        Question.findOne({_id: req.params.id}, function(err, question){
            var answer = new Answer(req.body);
            answer._question = question._id;
            answer.save(function(err){
                question.answers.push(answer);
                question.save(function(err){
                    if(err) {
                        console.log(err);
                        res.status(400).json({message:"unable to add answer"});
                    }
                    else{
                        console.log("successful post:", answer)
                        res.json(true);
                    }
                });
            });
        });
    },

    like: function (req, res){
        console.log('im in like of qs', req.params.id)
        Answer.findOne({_id: req.params.id}, function(err, answer){
            answer.likes ++;
            answer.save(function(err){
                if(err) {
                    console.log(err);
                    res.status(400).json({message:"unable to add like"});
                }
                else{
                    console.log("successful post:", answer)
                    res.redirect('/one/' + answer._question);
                }
             })
            })
        }
}
