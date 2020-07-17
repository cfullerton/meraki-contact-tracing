const app = require('express')();
app.post('/data', function(req, res) {
    console.log(req.body)
    res.send('9954e8cc03bbd5063df927a1e76925e09a40c032')
})
app.get('/data', function(req, res) {
    res.send('9954e8cc03bbd5063df927a1e76925e09a40c032')
})
module.exports = app;