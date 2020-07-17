const app = require('express')();
app.get('/public/*', function(req, res){
    path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: './public'});
});
module.exports = app;