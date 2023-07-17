//Dependencies
const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { UserRouter } = require("./Routes/User.Routes");
const { QuizRouter } = require("./Routes/Quiz.Routes");
const { LeaderboardRouter } = require("./Routes/Leaderboard.Routes");
require("dotenv").config();
const port = process.env.PORT || 1111;
//Creating Server
const app = express();

app.use(express.json());
app.use(cors());

//------------Routes Starts---------

app.use("/user", UserRouter);
app.use("/quiz", QuizRouter);
app.use("/leaderboard", LeaderboardRouter);
//------------Routes Ends------------------

app.listen(port, async () => {
	try {
		await connection();
		console.log("Connected to  DB");
	} catch (error) {
		console.log(error);
	}
	console.log(`Listening @ ${port}`);
});
