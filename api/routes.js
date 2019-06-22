const voteController = require('./controllers/vote.controller');
module.exports = app =>{
    app.route('/votes')
    .get(voteController.getAllVote)
}