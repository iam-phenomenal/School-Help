const router = require("express").Router();
const Research = require("../models/Research");
const {queryResult} =
    require("../https/controllers/unauthenticatedUsers/unauthenticatedFeaturesController");
const {createDocument, getDocument,getDocuments, deleteDocument, 
    updateDocument} = require("../https/controllers/authenticatedUsers/featuresController");
const {getResult} = require("../https/middlewares/queryResponseGen");

//Query and save research
router.post("/:userid", getResult("research"), createDocument(Research));

//Get research
router.get("/:userid/:documentid", getDocument(Research));

//Delete research
router.delete("/:userid/:documentid", deleteDocument(Research));

//Update research
router.put("/:userid/:documentid", updateDocument(Research));

//Get all researches
router.get("/:userid", getDocuments(Research));

//Non authenticated user
//Query research
router.post("", getResult("research"), queryResult);

module.exports = router;