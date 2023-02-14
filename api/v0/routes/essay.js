const router = require("express").Router();
const Essay = require("../models/Essay");
const {queryResult} =
    require("../https/controllers/unauthenticatedUsers/unauthenticatedFeaturesController");
const {createDocument, getDocument,getDocuments, deleteDocument, 
    updateDocument} = require("../https/controllers/authenticatedUsers/featuresController");
const {getResult} = require("../https/middlewares/queryResponseGen");

//Create and save a essay query
router.post("/:userid", getResult("essay"), createDocument(Essay));

//Get essay query
router.get("/:userid/:documentid", getDocument(Essay));

//Update essay
router.put("/:userid/:documentid", updateDocument(Essay));

//Delete essay query
router.delete("/:userid/:documentid", deleteDocument(Essay));

//Get all essay queries
router.get("/:userid", getDocuments(Essay));

//Non authenticated users
//Create a essay query
router.post("", getResult("essay_writer"), queryResult);

module.exports = router;