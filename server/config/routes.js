var qs = require('../controllers/qs.js');
var path = require('path');

module.exports = function (app){
    console.log("in routes");

    app.get('/api/all', function (req, res){
        console.log("in get req")
        qs.showAll(req, res);
    });

    app.get('/api/:id', function (req, res){
        console.log("in get req")
        qs.showOne(req, res);
    });

    app.post('/api/all', function (req, res){
        console.log("in routes.js post add")
        qs.create(req, res);
    });

    app.post('/api/:id', function (req, res){
        console.log("in routes.js post create")
        qs.add(req, res);
    });
    app.get('/api/like/:id', function(req, res){
        console.log('route like')
        qs.like(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./Public/dist/index.html"))
    });
}
