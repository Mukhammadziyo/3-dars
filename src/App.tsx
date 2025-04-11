import { useState } from "react";
import { Todo } from "./interface";
import FormElement from "./components/FormElement";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <FormElement setTodos={setTodos} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-content">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <p>
                Type: <span>{todo.type}</span> | Status:{" "}
                {todo.completed ? "✅ Done" : "❌ Not Done"}
              </p>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
