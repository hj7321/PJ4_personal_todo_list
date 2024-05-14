import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [workingList, setWorkingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const addWorkingBox = (e) => {
    e.preventDefault();
    setTitle(title);
    setContent(content);
    let newWorkingList = { title, content, id: Date.now() };
    setWorkingList([...workingList, newWorkingList]);
  };

  const deleteList = (id) => {};

  return (
    <>
      <header>
        <h1>My Todo List📝</h1>
        <form>
          <label>
            제목&ensp;
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => e.target.value}
            />
          </label>
          <label>
            내용&ensp;
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => e.target.value}
            />
          </label>
          <button className="add-btn">추가하기</button>
        </form>
      </header>
      <section>
        <div className="working-box">
          <h1>Working..🔥</h1>
          <article>
            <div className="list-box">
              <h3>📌리액트 공부하기</h3>
              <p>리액트 기초를 공부해봅시다.</p>
              <button className="delete-btn">삭제</button>
              <button className="complete-btn">완료</button>
            </div>
            <div className="list-box">
              <h3>📌개인 과제하기</h3>
              <p>나만의 Todo List를 만들어봅시다.</p>
              <button className="delete-btn">삭제</button>
              <button className="complete-btn">완료</button>
            </div>
            <div className="list-box">
              <h3>📌ㅇ</h3>
              <p>
                ㅁ
              </p>
              <button className="delete-btn">삭제</button>
              <button className="complete-btn">완료</button>
            </div>
          </article>
        </div>
        <div className="done-box">
          <h1>Done!🎉</h1>
          <article>
            <div className="list-box">
              <h3>✅자바스크립트 공부하기</h3>
              <p>자바스크립트 고급 문법을 복습해봅시다.</p>
              <button className="delete-btn">삭제</button>
              <button className="complete-btn">취소</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
