const express = require("express");
const cookieParser=require("cookie-parser");
const app=express();
const port=8000;

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static("./assets"));