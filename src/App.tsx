import { useState, useEffect } from "react";
import Header from "./components/header";
import Tabs from "./components/tabs";
import TodoList from "./components/todo-list";
import TodoInput from "./components/todo-input";
import { TabOptions } from "./types/type";
import { Todo } from "./types/interface";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [currentTab, setCurrentTab] = useState<TabOptions>("All");

  function handleAddTodo(title: string) {
    const newTodoList = [...todos, { title, completed: false }];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(todoIndex: number) {
    setTodos((todos) => {
      return todos.filter((todo, index) => index !== todoIndex);
    });
  }

  function handleTodoCompleted(todoIndex: number) {
    const todo = todos[todoIndex];
    todo.completed = !todo.completed;
    setTodos([...todos]);
  }

  useEffect(() => {
    // Guard clause
    if (!localStorage || !localStorage.getItem("todos")) return;
    let db = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(db.todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify({ todos }));
  }, [todos]);

  return (
    <div className="w-full h-screen p-6 bg-zinc-800 overflow-x-hidden">
      <Header todos={todos} />
      <Tabs
        todos={todos}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TodoList
        currentTab={currentTab}
        todos={todos}
        handleTodoCompleted={handleTodoCompleted}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </div>
  );
};

export default App;
