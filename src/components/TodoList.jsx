import TodoItem from "./TodoItem.jsx";

const TodoList = ({ name, title, todos, setTodos }) => {
  return (
    <div className={name}>
      <h1>{title}</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="list-box">
            <TodoItem todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
