const express=require("express");
const cors = require('cors');
const puppeteer= require('puppeteer');
const { verification } = require("./Router/puppeteer");

const app=express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use("/verify",verification)

app.listen(8080,async(req,res)=>{
    try {
        console.log("Connected")
    } catch (error) {
        console.log("Connection Error")
    }
})