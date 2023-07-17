const { UserModel } = require("../Models/User.Model");

const UserRouter = require("express").Router();

UserRouter.post("/", async (req, res) => {
	console.log("Entered");
	try {
		const { username, email } = req.body;

		const isUserExists = await UserModel.findOne({ email });

		if (isUserExists) {
			return res
				.status(201)
				.json({
					msg: "User Login Successfull",
					flag: true,
					user: isUserExists,
				});
		}
		const newUser = new UserModel({ email, username });
		await newUser.save();

		res
			.status(200)
			.json({ msg: "User Registration SuccessFul", flag: true, user: newUser });
	} catch (error) {
		res.status(401).json({ msg: error.message, flag: false });
	}
});

module.exports = { UserRouter };
