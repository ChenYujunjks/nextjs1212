"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoListItem = ({ todos, toggleTodo }: TodoListProps) => {
  return (
    <ul className="list-disc pl-5">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          className={`cursor-pointer p-2 ${
            todo.completed ? "line-through text-gray-500" : "text-black"
          }`}
        >
          {todo.text} {todo.completed ? "❌" : "✅"}
        </li>
      ))}
    </ul>
  );
};

const TodoListComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn TypeScript", completed: false },
    { id: 2, text: "Build a React App", completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoListItem todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default TodoListComponent;
