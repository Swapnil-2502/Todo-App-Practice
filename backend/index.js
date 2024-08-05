const express = require("express");
const cors = require("cors")
const { createTodo, updateTodo } = require("./types");
const { userTodo } = require("./db");
const app = express()

// Add this line to parse JSON request bodies
app.use(express.json());

const PORT = 3001

app.use(cors());
// Enable CORS for specific origins
// app.use(cors({
//     origin: ['http://localhost:5173', 'http://localhost:3001/todos'] // Replace with your allowed origins
// }));

// app.get("/", (req,res)=>{
//     return res.send("Hi There")
// })

app.post('/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload){
        res.status(411).json({
            msg: "You send a wrong inputs"
        })
        return;
    }
    
    //To put in Mongodb
    await userTodo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get('/todos',async (req,res)=>{
    try {
        // Find all todos in the database
        const todos = await userTodo.find({});
        
        // Send the todos as a JSON response
        res.status(200).json({
            "todos":todos
        });
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "An error occurred while fetching todos." });
    }
})

app.put('/completed',async (req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send a wrong inputs"
        })
        return ;
    }

    await userTodo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg: "Todo is marked as completed"
    })
})

app.listen(PORT, () => {
    console.log("Server running on PORT "+PORT)
})