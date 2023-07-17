const { QuizModel } = require("../Models/Quiz.Model");

const QuizRouter = require("express").Router();
QuizRouter.get("/:id", async (req, res) => {
	try {
		const QuizId = req.params.id;

		const quizes = await QuizModel.find({ _id: QuizId });

		// console.log(quizes);
		res.status(200).json(quizes);
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: error.message, flag: false });
	}
});
QuizRouter.get("/", async (req, res) => {
	try {
		const quizes = await QuizModel.find();

		// console.log(quizes);
		res.status(200).json(quizes);
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: error.message, flag: false });
	}
});

QuizRouter.post("/", async (req, res) => {
	try {
		const newQuiz = new QuizModel(req.body);
		await newQuiz.save();

		res.status(200).json({ msg: "Quiz Created!!!" });
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: error.message });
	}
});

QuizRouter.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id;

		await QuizModel.findByIdAndUpdate(id, req.body);

		res.status(200).json({ msg: "Quiz Edited!!!" });
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: error.message });
	}
});

QuizRouter.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;

		await QuizModel.findByIdAndDelete(id);

		res.status(200).json({ msg: "Quiz Deleted!!!" });
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: error.message });
	}
});

module.exports = { QuizRouter };
