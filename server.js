const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);
const routes = require('./api/routes');
const sockets = require('./api/sockets');
const bodyParser = require('body-parser');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

sockets(socketIO);


const port = process.env.PORT || 5000;

http.listen(port, () => console.log(`Server listening on port ${port}`));