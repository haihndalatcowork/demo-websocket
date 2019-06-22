const db = require('../configs/db');
module.exports =  {
    updateVotes: (socketIO, socket) => {
        socket.on('VOTED', (optionId) => {
            let sql = `UPDATE votes SET count = count + 1 WHERE id=${optionId}`;
            db.query(sql, (err) => {
                if (err) throw err;
                socketIO.sockets.emit("UPDATED_VOTE", {success: true});
            });
        });
    }
};