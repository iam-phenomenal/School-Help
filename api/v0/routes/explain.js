//Imports
const router = require("express").Router();
const Explanation = require("../models/Explanation");
const {queryResult} =
    require("../https/controllers/unauthenticatedUsers/unauthenticatedFeaturesController");
const {createDocument, getDocument,getDocuments, deleteDocument, 
    updateDocument} = require("../https/controllers/authenticatedUsers/featuresController");
const {getResult} = require("../https/middlewares/queryResponseGen");

//Create and save explanation
router.post("/:userid", getResult("explain"), createDocument(Explanation));

//Get explanation
router.get("/:userid/:documentid", getDocument(Explanation));

//Update explanation
router.put("/:userid/:documentid", updateDocument(Explanation));

//Delete explanation
router.delete("/:userid/:documentid", deleteDocument(Explanation));

//Get all explanations
router.get("/:userid", getDocuments(Explanation));

//Non authenticated users
//Create explanation
router.post("", getResult("explain"), queryResult);

module.exports = router;