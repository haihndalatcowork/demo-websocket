const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);
const db = require('./configs/db');

const tableName = 'votes';
socketIO.on("connection", socket => {
    socket.on('VOTED', (optionId) => {
        let sql = `UPDATE ${tableName} SET count = count + 1 WHERE id=${optionId}`;
        db.query(sql, (err) => {
            if (err) throw err;
            socketIO.sockets.emit("send to client", {success: true});
        });
    });
    socket.on("disconnect", () => {

    })
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/votes', (req, res) => {
    let sqlString = `SELECT * FROM ${tableName}`;
    db.query(sqlString, (err, response) => {
        if (err) throw err;
        res.json(response);
    })
});
const port = process.env.PORT || 5000;

http.listen(port, () => console.log(`Server listening on port ${port}`));