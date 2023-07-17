const mongoose = require("mongoose");
require("dotenv").config();

const connection = () => {
	mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.bcqczq8.mongodb.net/quiz?retryWrites=true&w=majority");
};

module.exports = { connection };
