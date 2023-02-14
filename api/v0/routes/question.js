const router = require("express").Router();
const Question = require("../models/Question")
const {queryResult} =
    require("../https/controllers/unauthenticatedUsers/unauthenticatedFeaturesController");
const {createDocument, getDocument,getDocuments, deleteDocument, 
    updateDocument} = require("../https/controllers/authenticatedUsers/featuresController");
const {getResult} = require("../https/middlewares/queryResponseGen");

//Ask a question
router.post("/:userid", getResult("question_answer"), createDocument(Question));

//Get individual question
router.get("/:userid/:documentid", getDocument(Question));

//Delete Question
router.delete("/:userid/:documentid", deleteDocument(Question));

//Update Question
router.put("/:userid/:documentid", updateDocument(Question));

//Get all questions
router.get("/:userid", getDocuments(Question));

//Non authenticated user
//Ask a question
router.post("", getResult("question_answer"), queryResult);

module.exports = router;