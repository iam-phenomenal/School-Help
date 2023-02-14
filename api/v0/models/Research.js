const mongoose = require("mongoose");

const ResearchSchema = new mongoose.Schema({
    userid: {type: mongoose.Types.ObjectId, ref: "User", required: true},
    subject: {type: String, required: true},
    result: {type: String, default: ""}
});

module.exports = mongoose.model("Research", ResearchSchema);