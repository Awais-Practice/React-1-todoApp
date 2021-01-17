import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/headerComponent";
import CreatorForm from "./components/creatorForm/creatorForm";
import Filters from "./components/filters/filters";
import TodoList from "./components/todoList/todoList";

function App() {
  return (
    <div className="App">
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <Header />

        <CreatorForm />

        <div className="p-2 mx-4 border-black-25 border-bottom"></div>
        <Filters />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
