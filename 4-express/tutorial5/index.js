const exp = require('constants');
const express = require('express');
const weatherRouter = require("./weatherRouter")

//create a web server
const app = express();
app.use(express.json()) // 解析传进请求头body中json数据, 得在router 前就解析好
app.use("/api", weatherRouter);




const PORT = 8000;
app.listen(PORT, ()=> {
  console.log(`Server is running on ${PORT}`)
})
