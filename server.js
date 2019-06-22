const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);
const mysql = require('mysql');

socketIO.on("connection", socket => {
    console.log("connected");
    socket.on('join the conversation', (userId) => {
        console.log(userId);
        socketIO.sockets.emit('send to client', {success: true})
    });
    socket.on("disconnect", () => {
        console.log("disconnected");
    })
});
var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "hc0NRaldjW",
    password: "AAlJkn6mFf",
    database: "hc0NRaldjW"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const port = process.env.PORT || 5000;

http.listen(port, () => console.log(`Server listening on port ${port}`));