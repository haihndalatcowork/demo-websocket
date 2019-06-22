const app = require('express')();
const socketIO = require('socket.io');

socketIO.on("connection", socket => {
    console.log("connected");
    socket.on("disconnect", () => {
        console.log("disconnected");
    })
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));