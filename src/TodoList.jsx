import "./App.css";

function TodoList({ list: { title, content, id, isDone }, deleteList, toggleList }) {
  return (
    <li key={id} className="list-box">
      <h3>
        {isDone ? "✅" : "📌"}
        {title}
      </h3>
      <p>{content}</p>
      <button
        className="delete-btn"
        onClick={() => {
          deleteList(id, isDone);
        }}
      >
        삭제
      </button>
      <button
        className={isDone ? "cancel-btn" : "complete-btn"}
        onClick={() => {
          toggleList(id, isDone);
        }}
      >
        {isDone ? "취소" : "완료"}
      </button>
    </li>
  );
}

export default TodoList;
