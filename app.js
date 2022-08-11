const express=require("express")
const donetv=require("dotenv").config();
const path= require("path")
const app=express()

app.use(express.static('public'))

app.listen(process.env.PORT,()=>{
  console.log("servidor funcionando en el puerto" + process.env.PORT);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname,"/views/register.html"))
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname,"/views/login.html"))
});