import "./App.css";
import TodoContainer from "./components/TodoContainer.jsx";

function App({ children }) {
  return <TodoContainer>{children}</TodoContainer>;
}

export default App;
