const TodoItem = ({ todo: { id, title, content, isDone }, setTodos }) => {
  const deleteTodo = () => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <h3>
        {isDone ? "✅" : "📌"}
        {title}
      </h3>
      <p>{content}</p>
      <button className="delete-btn" onClick={deleteTodo}>
        삭제
      </button>
      <button
        className={isDone ? "cancel-btn" : "complete-btn"}
        onClick={toggleTodo}
      >
        {isDone ? "취소" : "완료"}
      </button>
    </>
  );
};

export default TodoItem;
