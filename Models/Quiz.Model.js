const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema({
	creatorId: String,
	creator: String,
	title: String,
	description: String,
	questions: [
		{
			title: String,
			answerOptions: [String],
			correctOptions: Number,
		},
	],
});

const QuizModel = mongoose.model("Quiz", QuizSchema);

module.exports = { QuizModel };
