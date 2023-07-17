const { LeaderboardModel } = require("../Models/Leaderboard.Model");

const LeaderboardRouter = require("express").Router();

LeaderboardRouter.get("/", async (req, res) => {
	try {
		const Leaderboard = await LeaderboardModel.fin();

		res.status(200).json(Leaderboard);
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: error.message });
	}
});

module.exports = { LeaderboardRouter };
