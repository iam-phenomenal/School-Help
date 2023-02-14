const {getResult} = require("../../middlewares/queryResponseGen");

const queryResult = (req, res)=>{
    //Destruct response
    const {result} = res;
    try{
        return res.status(200).json({
            message: "Query result",
            result: result
        });
    }catch(err){
        return res.status(500).json({error: err.message});
    }
}

module.exports = {queryResult};