const app = require('express')();
app.post('/login', function(req, res) {
    console.log(req)
    res.send(200)
})
module.exports = app;