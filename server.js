const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);

socketIO.on("connection", socket => {
    console.log("connected");
    socket.on("disconnect", () => {
        console.log("disconnected");
    })
});

const port = process.env.PORT || 5000;

http.listen(port, () => console.log(`Server listening on port ${port}`));