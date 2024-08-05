/* eslint-disable react/prop-types */
export function Todos({ todos }) {
    return (
      <div>
        {todos.length > 0 ? (
          todos.map(todo => (
            <div key={todo._id}> {/* Use a unique key */}
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
            </div>
          ))
        ) : (
          <p>No todos available</p>
        )}
      </div>
    );
  }
  