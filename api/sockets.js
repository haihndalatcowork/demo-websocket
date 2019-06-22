const {updateVotes} = require("./socketEvents");
module.exports = socketIO => {
    socketIO.on("connection", socket => {

        updateVotes(socketIO, socket);

        socket.on("disconnect", () => {
        })
    });
};