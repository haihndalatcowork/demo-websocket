const voteController = require('./controllers/vote.controller');
const usersController = require('./controllers/users.controller');
module.exports = app => {
    app.route('/votes')
        .get(voteController.getAllVote)

    app.route('/register')
        .post(usersController.register)
};