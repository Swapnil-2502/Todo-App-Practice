import { useState } from 'hono/jsx'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([])

  // fetch("http://localhost:3001/todos")
  //   .then(async function(res){
  //     const json = await res.json()
  //     console.log(json)
  //     setTodos(json.todos);
  //   })

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos} ></Todos>
      </div>
    </>
  )
}

export default App
