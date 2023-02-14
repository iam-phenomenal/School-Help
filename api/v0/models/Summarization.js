const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    userid: {type: mongoose.Types.ObjectId, ref: "User", required: true},
    text: {type: String, required: true},
    summary: {type: String, default: ""}
});

module.exports = mongoose.model("Question", QuestionSchema);