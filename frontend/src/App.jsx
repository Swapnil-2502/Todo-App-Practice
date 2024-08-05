import { useState, useEffect } from 'react'; // Correct import for useEffect
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then(async function(res) {
        const json = await res.json();
        console.log('Fetched todos:', json); // Check if this is an array or object
        // If json is an array directly, setTodos(json) 
        // If json is an object containing todos, use json.todos
        setTodos(Array.isArray(json) ? json : json.todos); 
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []); // Ensure the fetch runs only once on component mount

  console.log('State todos:', todos); // Verify state update

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
