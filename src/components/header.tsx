import { HeaderProps } from "../types/interface";

const Header: React.FC<HeaderProps> = ({ todos }) => {
  const activeTodos = todos.filter((todo) => {
    return !todo.completed;
  });

  return (
    <header>
      <h1 className="text-2xl font-semibold my-3 tracking-wide bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
        You have {activeTodos.length} open {activeTodos.length > 1 ? "tasks": "task"}.
      </h1>
    </header>
  );
};

export default Header;
