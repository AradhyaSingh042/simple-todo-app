import { TodoListProps } from "../types/interface";
import TodoCard from "./todo-card";

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, currentTab, handleTodoCompleted, handleDeleteTodo } = props;

  const filteredTodos =
    currentTab === "All"
      ? todos
      : currentTab === "Open"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((t) => t.title === todo.title)}
            todo={todo}
            handleTodoCompleted={handleTodoCompleted}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
