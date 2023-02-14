//Create a Document
const createDocument = (Model)=>{
    return async (req, res)=>{
        //Destruct request
        const {query} = req.body;
        const {result: _result} = res;
        const {userid} = req.params
        //Create a new question object
        const newDocument = new Model({
            userid: userid,
            subject: query,
            result: _result
        });
        try{
            //Save document
            const savedDocument = await newDocument.save();
            //Send document details
            return res.status(201).json({
                message: "Document created",
                output: savedDocument
            })
        }catch(err){
            //Send error
            return res.status(500).json({error: err.message});
        }
    }
}

//Get single document
const getDocument = (Model)=>{
    return async (req, res)=>{
        //Destruct request
        const {documentid} = req.params;
        try{
            //Find document by id
            const document = await Model.findById(documentid);
            //document not found
            if(!document){
                //Send error
                return res.status(400).json({
                    error: "Document not found"
                });
            }
            //Send explanation details
            return res.status(200).json({
                message: "Document found",
                output: document
            });
        }catch(err){
            //Send error
            return res.status(500).json({
                error: err.message
            });
        }
    }
}

//Delete document
const deleteDocument = (Model)=>{
    return async(req, res)=>{
        //Destruct request
        const {documentid} = req.params
        try{
            //Find and delete question
            const document = await Model.findByIdAndDelete(documentid);
            //Document not found in database
            if(!document){
                //Send error
                return res.status(400).json({
                    error: "Document not found"
                });
            }
            //Send document
            return res.status(200).json({
                message: "Document has been deleted",
                output: document
            })
        }catch(err){
            //Send error
            return res.status(500).json({
                error: err.message
            })
        }
    }
}

//Get documents
const getDocuments = (Model)=>{
    return async(req, res)=>{
        //Destruct request
        const {recent, subject} = req.query;
        const {userid} = req.params;
    
        try{
            let documents;
            //Find documents by recency
            if(recent){
                documents = await Model.find({
                    userid: userid
                }).select("subject result").limit(10).sort(-1);
            }
            //Find document by title
            else if(subject){
                documents = await Model.find({
                    userid: userid, 
                    subject: subject
                }).select("subject result").sort(-1);
            }
            //Find resource in database
            documents = await Model.find({userid:userid}).sort(-1);
            //Resource not found in database
            if(!documents){
                return res.status(400).json({
                    error: "No results found"
                });
            }
            //Send document details
            return res.status(200).json({
                message: "Document found",
                output: documents
            });
        }catch{
            //Send error
            return res.status(500).json({error: err.message});
        }
    }
}

//Update Document
const updateDocument = (Model)=>{
    return async (req, res)=>{
        //Destruct request
        const {documentid} = req.params
        try{
            //Find and update question
            const document = await Model.findByIdAndUpdate(documentid, {
                $set: req.body
            }, {new: true})
            //Document not found in database
            if(!document){
                return res.status(400).json({
                    error: "Document not found"
                });
            }
            //Send updated document details
            return res.status(200).json({
                message: "Document update successful",
                output: document
            });
        }catch(err){
            //Send error
            return res.status(500).json({
                error: err.message
            });
        }
    }
}

module.exports = {createDocument, getDocument, getDocuments, deleteDocument, updateDocument}