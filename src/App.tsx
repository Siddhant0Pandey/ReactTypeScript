import React, { useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields";
import InputList from "./components/InputList";
import { Todo } from "./components/models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isdone: false }]);
    }
  };

  console.log(todo);
  return (
    <div className="App">
      <span className="heading">TOdo Bar!</span>

      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <InputList todos={todo} setTodos={setTodos} />
    </div>
  );
};

export default App;
