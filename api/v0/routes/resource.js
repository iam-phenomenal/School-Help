const router = require("express").Router();
const Resource = require("../models/Resource");
const {queryResult} =
    require("../https/controllers/unauthenticatedUsers/unauthenticatedFeaturesController");
const {createDocument, getDocument,getDocuments, deleteDocument, 
    updateDocument} = require("../https/controllers/authenticatedUsers/featuresController");
const {getResult} = require("../https/middlewares/queryResponseGen");

//Query and save resource
router.post("/:userid", getResult("resource"), createDocument(Resource));

//Get resource
router.get("/:userid/:documentid", getDocument(Resource));

//Delete resource
router.delete("/:userid/:documentid", deleteDocument(Resource));

//Update resource
router.put("/:userid/:documentid", updateDocument(Resource));

//Get all resources
router.get("/:userid", getDocuments(Resource));

//Non authenticated user
//Query resource
router.post("", getResult("resource"), queryResult);

module.exports = router;