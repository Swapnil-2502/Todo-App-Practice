const express = require("express")
const app = express()

const PORT = 3001

app.get("/", (req,res)=>{
    return res.send("Hi There")
})

app.post('/todo', (req,res)=>{
    return res.send("Hi There")
})

app.get('/todos', (req,res)=>{
    return res.send("Hi There")
})

app.put('/completed', (req,res)=>{
    return res.send("Hi There")
})

app.listen(PORT, () => {
    console.log("Server running on PORT "+PORT)
})