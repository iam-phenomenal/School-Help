//Imports
const express = require('express')
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const db = require("./database")
const {json, urlencoded} = require("express")

//Import routes
const essayRouter = require("../api/v0/routes/essay");
const explainRouter = require("../api/v0/routes/explain");
const questionRouter = require("../api/v0/routes/question");
const researchRouter = require("../api/v0/routes/research");
const resourceRouter = require("../api/v0/routes/resource");
const noteRouter = require("../api/v0/routes/study_note");
//Initialize express server
const app = express()

//Link database
db.on("error", (error)=>console.error(error))
db.once("open", ()=>console.log("Database connection successful"))

//Use dependencies
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(json());
app.use(urlencoded({extended: true}));

//Use routes
app.use("/api/v0/essay", essayRouter);
app.use("/api/v0/explain", explainRouter);
app.use("/api/v0/question", questionRouter);
app.use("/api/v0/research", researchRouter);
app.use("/api/v0/resource", resourceRouter);
app.use("/api/v0/note", noteRouter);

//404 error handling
app.use((req, res)=>{
    res.status(404).json({error: "Page not found"});
})

module.exports = app;