import { FormEvent, useRef } from "react";
import { Todo } from "../interface";
import "./FormElements.css";

interface FormElementProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function FormElement({ setTodos }: FormElementProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const f: any = e.target;
    const formData = new FormData(f);

    const title = formData.get("title");
    const completed = formData.get("completed") === "on";
    const description = formData.get("description");
    const type = formData.get("type");

    const todo: Todo = {
      title,
      completed,
      description,
      id: Date.now(),
      type,
    };

    setTodos((prev: Todo[]) => [...prev, todo]);
    f.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input ref={inputRef} id="title" type="text" name="title" required />
      </div>

      <div>
        <label htmlFor="des">Description:</label>
        <textarea id="des" name="description" />
      </div>

      <div>
        <input type="checkbox" name="completed" id="comp" />
        <label htmlFor="comp">Completed</label>
      </div>

      <div>
        <label>Type:</label>
        <select name="type">
          <option value="hard">Hard</option>
          <option value="normal">Normal</option>
          <option value="easy">Easy</option>
        </select>
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default FormElement;
