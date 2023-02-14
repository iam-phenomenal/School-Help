const User = require("../../models/User");
const { createError } = require("../utils/createError");
const { hashPassword } = require("../utils/hasher");
const {validationResult} = require("express-validator");

//Get indie user
const getUser = async (req, res, next)=>{
    //Destruct request params
    const {userid} = req.params;
    
    try{
        //Get user from database
        const user = await User.findById(userid);
        //If user is not found
        if(!user){
            return res.status(422).json({error: "User not found"});
        }
        //Destruct user
        const {password, ...others} = user._doc
        return res.status(200).json({
            message: "User Fetched",
            userInfo: others
        });
    }catch(err){
        //Send error
        return res.status(500).json({error: err.message});
    }
}

const updateUser = async(req, res, next)=>{
    //Destruct request params
    const {userid} = req.params;
    //Validate request body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    try{
        //If password is to be updated
        if(req.body.password){
            //Hashpassword
            const hashedPassword = await hashPassword(req.body.password);
            //Update request password body
            req.body.password = hashedPassword;
        }
        //Find user and update
        const user = await User.findByIdAndUpdate(userid, {$set: req.body}, {new: true});
        if(!user){
            return res.status(400).json({error: "Invalid request"});
        }
        //Destruct user credential
        const {password, ...others} = user._doc;
        //Output user info
        return res.status(200).json({
            message: "Update successful",
            output: others
        });
    }catch(err){
        //Send error
        return res.status(500).json({error: err.message});
    }
}

const deleteUser = async(req, res, next)=>{
    //Destructing user
    const {userid} = req.params;
    try{
        //Search and delete user by id
        const user = await User.findByIdAndDelete(userid);
        if(!user){
            return res.status(422).json({error: "User not available"});
        }
        //Delete user's summary notes
        //Delete user's QAs
        //Blacklist user token
        //Output success
        return res.status(200).json({message: "User has been deleted"});
    }catch(err){
        //Send error
        return res.status(500).json({error: err.message});
    }
}

module.exports = {getUser, updateUser, deleteUser};