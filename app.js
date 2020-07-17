const app = require('express')();
const bodyParser = require('body-parser');
const requireDir = require('require-dir')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('view engine', 'jade');

/* http request handling */
var routes = requireDir('./routes');
for (var i in routes) app.use('/', routes[i]);

app.listen(3000);