const conectarDB = require("./server/config/db");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path")
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "pug")
app.set('views', path.join(__dirname, '/front/views'));

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/calculadora", (req, res)=>{
    res.render("calculadora")
})
app.listen(port, ()=>{
    console.log(`Puerto ${port} conectado`)
})
conectarDB();
