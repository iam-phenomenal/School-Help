const {body} = require("express-validator");

const queryValidator = [
    body("query").exists().withMessage("query is required!")
    .isString().withMessage("Query should be valid string!")
]

module.exports = queryValidator;