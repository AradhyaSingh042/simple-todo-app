import { TabOptions } from "./type";

export interface Todo {
  title: string;
  completed: boolean;
}

export interface HeaderProps {
  todos: Todo[];
}

export interface TabsProps {
  todos: Todo[];
  currentTab: TabOptions;
  setCurrentTab: (tab: TabOptions) => void;
}

export interface TodoCardProps {
  key: number;
  todo: Todo;
  todoIndex: number;
  handleTodoCompleted: (todoIndex: number) => void;
  handleDeleteTodo: (todoIndex: number) => void;
}

export interface TodoInputProps {
  handleAddTodo: (title: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  currentTab: TabOptions;
  handleTodoCompleted: (todoIndex: number) => void;
  handleDeleteTodo: (todoIndex: number) => void;
}
