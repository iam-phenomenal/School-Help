//Imports
require("dotenv").config();
const {Configuration, OpenAIApi} = require("openai");
const { generatePrompt } = require("../../utils/promptGenerator");

//OPEN AI configuration
const configuration = new Configuration({
    apiKey: process.env["QA_API_KEY"]
});
const openai = new OpenAIApi(configuration);

const getResult = (source) =>{
    return async(req, res, next)=>{
        //Check fpr api key presence
        if(!configuration.apiKey){
            return res.status(500).json({
                error: "Missing API key"
            });
        }
        //Destruct request body
        const {query} = req.body;
        try{
            //Generate prompt
            const {prompt, token, temp} = generatePrompt(source, query);
            //Generate completion
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: temp,
                max_tokens: token,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            //Get result from completion response
            const result = completion.data.choices[0].text;
            //Add result to response body
            res.result = result;
            return next();
        }catch(err){
            //Handling error 
            //OpenAI error
            if (err.response) {
                const {status, data} = err.response
                //Log error
                console.log(status);
                console.log(data);
                //Send error
                return res.status(status).json({error: data});
            }
            //Internal server error
            else {
                //Log error
                console.log(err.message);
                //Send error
                return res.status(500).json({error: err.message});
            }
        }
    }
}

module.exports = {getResult};