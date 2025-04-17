import { TabsProps } from "../types/interface";
import { TabOptions } from "../types/type";

const Tabs: React.FC<TabsProps> = ({ todos, currentTab, setCurrentTab }) => {
  const tabs: TabOptions[] = ["All", "Open", "Completed"];
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <nav className="my-6 flex items-center gap-4">
      {tabs.map((tab, tabIndex) => {
        const itemCount =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? activeTodos.length
            : completedTodos.length;

        return (
          <button
            className={`bg-zinc-700 tracking-wide shadow-md shadow-zinc-900 cursor-pointer duration-300 transition-shadow hover:shadow-sm text-rose-300 px-4 py-2 rounded-md ${tab===currentTab && "border-b-2 border-b-rose-400"}`}
            key={tabIndex}
            onClick={(e)=> setCurrentTab(tab)}
          >
            {tab} ({itemCount})
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
