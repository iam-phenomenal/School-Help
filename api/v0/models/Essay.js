const mongoose = require("mongoose");

const EssaySchema = new mongoose.Schema({
    userid: {type: mongoose.Types.ObjectId, ref: "User", required: true},
    subject: {type: String, required: true},
    result: {type: String, default: ""}
});

module.exports = mongoose.model("Essay", EssaySchema);