/* eslint-disable react/prop-types */
export function Todos({todos}){
    return (
        <div>
            {todos.map(function(todo){
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed == true ? "Completed":"Mark as Complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}