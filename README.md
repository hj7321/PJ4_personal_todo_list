# PJ4_personal_todo_list

개인 프로젝트: My Todo List 만들기

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 분리한 컴포넌트: TodoList 컴포넌트

- 부모 컴포넌트인 App 컴포넌트에서 자식 컴포넌트인 TodoList 컴포넌트에게 총 4개의 props를 전달했다.

  - `key` 값으로는 `list.id`를 전달했다.
    - React에서 컴포넌트 리스트를 렌더링할 때 `map()` 메서드를 사용하면, 각 요소를 구분하기 위해서 고유한 `key` 값을 지정해야 한다.
  - `list` 값으로는 `list`(배열의 요소(객체))를 전달했다.
    - 각 `list`는 객체로, `id`, `title`, `content`, `isDone`이라는 네 개의 속성이 존재한다.
  - `deleteList` 값으로는 `deleteList()` 함수를 전달했다.
    - 해당 할 일 목록을 삭제하는 함수로, 매개변수로는 삭제할 할 일 목록에 해당하는 `id`와 `isDone` 값을 받는다.
  - `toggleList` 값으로는 `toggleList()` 함수를 전달했다.
    - 해당 할 일 목록의 위치를 이동하는 함수로, 매개변수로는 이동할 할 일 목록에 해당하는 `id`와 `isDone` 값을 받는다.

- TodoList 컴포넌트에서는 삼항 연산자를 사용하여 `isDone`의 값에 따라서 아이콘, 버튼 클래스명, 버튼 글자가 달라지도록 구현했다.
  - 아이콘: `isDone`이 `true`이면 "✅", `false`이면 "📌"을 보이도록 구현했다.
  - 버튼 클래스명: `isDone`이 `true`이면 "cancel-btn", `false`이면 "complete-btn"을 보이도록 구현했다.
  - 버튼 글자: `isDone`이 `true`이면 "취소", `false`이면 "완료"를 보이도록 구현했다.

## 개선한 부분

## 1. components 폴더 생성 및 4개의 컴포넌트 생성

- `components`라는 폴더를 생성하고, 그 폴더 아래에 4개의 jsx 파일을 생성하였다.
- 각 jsx 파일은 컴포넌트이다.

## 2. `TodoContainer.jsx` 파일 생성 및 코드 작성

- 웹페이지의 뼈대를 잡는 파일
- 크게 헤더(header) 영역과 섹션(section) 영역으로 나뉜다.
- 헤더 영역에는 웹페이지의 전체 제목을 보여주는 h1 태그와 `TodoForm` 컴포넌트가 포함되어 있다.
- 섹션 영역에는 `TodoList` 컴포넌트 2개가 포함되어 있다.
- `todos` state가 정의되어 있다.

## 3. `TodoForm.jsx` 파일 생성 및 코드 작성

- 헤더 부분에 제목과 내용을 입력하는 폼 태그를 나타내는 파일
- 부모 컴포넌트인 `TodoContainer` 컴포넌트에서 `setTodos` props를 받아온다.
- 비제어 컴포넌트(`FormData`)

## 4. `TodoList.jsx` 파일 생성 및 코드 작성

-

## 5. `TodoItem.jsx` 파일 생성 및 코드 작성

## 6. `App.jsx` 파일 내용 대거 수정

- `TodoContainer` 컴포넌트를 리턴하고, `TodoContainer` 안에 있는 모든 요소를
