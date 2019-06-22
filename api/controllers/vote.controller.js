const db = require('../../configs/db');
const tableName = 'votes';
let voteController = {
    getAllVote:(req,res)=>{
        let sqlString = `SELECT * FROM ${tableName}`;
        db.query(sqlString,(err,response)=>{
            if(err) throw err;
            res.json(response);
        })
    }
};
module.exports = voteController;