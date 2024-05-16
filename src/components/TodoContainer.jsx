import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const TodoContainer = () => {
  const initialTodos = [
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
    {
      id: 3,
      title: "자바스크립트 공부하기",
      content: "자바스크립트 3주차~5주차 강의 다시 들으면서 복습하기",
      isDone: true,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <header>
        <h1>My Todo List📝</h1>
        <TodoForm setTodos={setTodos} />
      </header>
      <section>
        <TodoList
          name={"working-box"}
          title={"Working..🔥"}
          todos={workingTodos}
          setTodos={setTodos}
        />
        <TodoList
          name={"done-box"}
          title={"Done!🎉"}
          todos={doneTodos}
          setTodos={setTodos}
        />
      </section>
    </>
  );
};

export default TodoContainer;
