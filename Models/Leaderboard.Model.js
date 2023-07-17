const mongoose = require("mongoose");

const LeaderboardSchema = mongoose.Schema({
	email: String,
	score: Number,
	QuizId: String,
});

const LeaderboardModel = mongoose.model("Leaderboard", LeaderboardSchema);

module.exports = { LeaderboardModel };
