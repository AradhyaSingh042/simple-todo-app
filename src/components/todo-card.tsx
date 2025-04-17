import { Trash2Icon } from "lucide-react";
import { TodoCardProps } from "../types/interface";

const TodoCard: React.FC<TodoCardProps> = ({ todo, todoIndex, handleTodoCompleted, handleDeleteTodo }) => {

  return (
    <div className="card bg-slate-700 cursor-pointer rounded-lg shadow-md shadow-zinc-900 my-4 py-3 px-5 flex flex-row justify-between items-center">
      <p className={`tracking-wider text-slate-100 ${todo.completed && "line-through"}`}>{todo.title}</p>
      <div className="todo-options flex items-center gap-4">
        <button className={`bg-slate-500 tracking-wide shadow-md shadow-slate-800 cursor-pointer text-slate-200 px-4 py-2 rounded-md ${todo.completed && "opacity-50"}`} onClick={(e) => handleTodoCompleted(todoIndex)}>
           {todo.completed ? "Undo" : "Done"}
        </button>
        <button className="bg-slate-800 flex items-center gap-2 tracking-wide shadow-md shadow-slate-800 cursor-pointer text-blue-400 px-4 py-2 rounded-md" onClick={(e) => handleDeleteTodo(todoIndex)}>
          Delete <Trash2Icon className="size-5 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
