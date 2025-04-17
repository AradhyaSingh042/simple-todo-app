import { useState } from "react";
import { CirclePlusIcon } from "lucide-react";
import { TodoInputProps } from "../types/interface";

const TodoInput: React.FC<TodoInputProps> = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container w-full mt-6 flex items-center gap-4">
      <input
        type="text"
        className="w-full bg-zinc-700 tracking-wide shadow-md shadow-zinc-900 border-2 border-zinc-600 rounded-md px-4 py-2.5 text-slate-300 outline-none"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-zinc-700 tracking-wide shadow-md shadow-slate-900 cursor-pointer text-blue-400 px-5 py-2.5 rounded-md"
        onClick={(e) => {
          if (!inputValue) return;
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        <CirclePlusIcon className="size-7 text-green-500" />
      </button>
    </div>
  );
};

export default TodoInput;
