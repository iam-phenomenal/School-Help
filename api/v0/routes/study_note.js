const router = require("express").Router();
const Note = require("../models/StudyNote");
const {queryResult} =
    require("../https/controllers/unauthenticatedUsers/unauthenticatedFeaturesController");
const {createDocument, getDocument,getDocuments, deleteDocument, 
    updateDocument} = require("../https/controllers/authenticatedUsers/featuresController");
const {getResult} = require("../https/middlewares/queryResponseGen");

//Query and save study note
router.post("/:userid", getResult("study_note"), createDocument(Note));

//Get study note
router.get("/:userid/:documentid", getDocument(Note));

//Delete study note
router.delete("/:userid/:documentid", deleteDocument(Note));

//Update study note
router.put("/:userid/:documentid", updateDocument(Note));

//Get all study note
router.get("/:userid", getDocuments(Note));

//Non authenticated user
//Query study note
router.post("", getResult("study_note"), queryResult);

module.exports = router;