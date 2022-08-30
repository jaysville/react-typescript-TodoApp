import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

// const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

function App() {
  return (
    <>
      <NewTodo />
      <Todos />
    </>
  );
}

export default App;
