const User = require("../../models/User")
const {hashPassword, verifyPassword} = require("../../utils/hasher")
const {signToken} = require("../../utils/tokenizer")
const {validationResult} = require("express-validator")

const login = async(req, res, next)=>{
    //Validate request body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    //Get request body
    const {username, password: _password} = req.body
    try{
        //Search user's model by email
        const user = await User.findOne({username: username})
        //If user doesn't exist
        if(!user){
            //Send error
            return res.status(401).json({error: "Invalid credentials"});
        }
        //Verify password
        const checkPassword = await verifyPassword(_password, user.password)
        //If password doesn't match
        if(!checkPassword){
            //Send error
            return res.status(401).json({error: "Invalid credentials"});
        }
        //Destructing user credentials
        const {password, ...others} = user._doc
        //Assign token
        const accessToken = signToken(user.toJSON())
        //Output succesful login
        return res.status(200).json({
            message: "Login successful",
            output: others,
            accessToken: accessToken
        })
    }catch(err){
        //Send error
        return res.status(500).json({error: err.message});
    }
}

const register = async(req, res, next)=>{
    //Validate request body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    //Get request body
    const {username, email, password: _password} = req.body;
    let {admin} = req.body;
    //User is not admin
    if(!admin) admin = false;
    try{
        //Hash password
        const hashedPassword = await hashPassword(_password);
        //Create new user model
        const newUser = new User({
            username: username,
            email:email,
            password: hashedPassword,
        });
        //Save user
        const savedUser = await newUser.save();
        //Seperate password from user credentials
        const {password, ...others} = savedUser._doc;
        //Sign token
        const accessToken = signToken(savedUser.toJSON());
        //Output result
        return res.status(201).json({
            message: "Registration successful",
            output: others,
            accessToken: accessToken
        });
    }catch(err){
        //Send error
        return res.status(500).json({error: err.message});
    }
}

module.exports = {register, login}