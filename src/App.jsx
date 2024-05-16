import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const initialWorkingList = [
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 스탠다드 강의 들은 것 복습하기",
      isDone: false,
    },
    {
      id: 2,
      title: "개인 과제 하기",
      content: "나만의 todo list 만들기",
      isDone: false,
    },
  ];
  const initialDoneList = [
    {
      id: 3,
      title: "자바스크립트 공부하기",
      content: "자바스크립트 3주차~5주차 강의 다시 들으면서 복습하기",
      isDone: true,
    },
  ];
  const [workingList, setWorkingList] = useState(initialWorkingList);
  const [doneList, setDoneList] = useState(initialDoneList);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addWorkingBox = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    const newWorkingList = { id: Date.now(), title, content, isDone: false };
    setTitle("");
    setContent("");
    setWorkingList([...workingList, newWorkingList]);
  };

  const deleteList = (id, isDone) => {
    if (isDone) {
      setDoneList(doneList.filter((list) => list.id !== id));
    } else {
      setWorkingList(workingList.filter((list) => list.id !== id));
    }
  };

  const toggleList = (id, isDone) => {
    if (isDone) {
      setDoneList(doneList.filter((list) => list.id !== id));
      const newWorkingList = doneList.filter((list) => list.id === id);
      newWorkingList[0].isDone = !newWorkingList[0].isDone;
      setWorkingList([...workingList, ...newWorkingList]);
    } else {
      setWorkingList(workingList.filter((list) => list.id !== id));
      const newDoneList = workingList.filter((list) => list.id === id);
      newDoneList[0].isDone = !newDoneList[0].isDone;
      setDoneList([...doneList, ...newDoneList]);
    }
  };

  return (
    <>
      <header>
        <h1>My Todo List📝</h1>
        <form onSubmit={addWorkingBox}>
          <label>
            제목&ensp;
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            내용&ensp;
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <button type="submit" className="add-btn">
            추가하기
          </button>
        </form>
      </header>
      <section>
        <div className="working-box">
          <h1>Working..🔥</h1>
          <ul>
            {workingList.map((list) => (
              <TodoList
                key={list.id}
                list={list}
                deleteList={deleteList}
                toggleList={toggleList}
              />
            ))}
          </ul>
        </div>
        <div className="done-box">
          <h1>Done!🎉</h1>
          <ul>
            {doneList.map((list) => (
              <TodoList
                key={list.id}
                list={list}
                deleteList={deleteList}
                toggleList={toggleList}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
