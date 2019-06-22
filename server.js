const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);
const db = require('./configs/db');

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

const port = process.env.PORT || 5000;

http.listen(port, () => console.log(`Server listening on port ${port}`));