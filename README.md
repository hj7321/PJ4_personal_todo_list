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

- 헤더 부분에 제목과 내용을 입력하는 폼 태그를 보여주는 파일

- `TodoForm` 컴포넌트의 부모 컴포넌트인 `TodoContainer` 컴포넌트에서 `setTodos` props를 받아왔다.

- `FormData` 객체를 사용하는 비제어 컴포넌트 방식으로 폼 요소를 처리했다.

- `trim()` 메서드를 사용하여 앞뒤 공백 문자를 제거하여 유효성 검사를 철저히 하였다.

- `id` 값은 `crypto.randomUUID()` 메서드를 사용하여 생성했다.

- 할 일 목록을 생성하는 `addTodos()` 함수
  - 현재 상태인 `todos` 배열을 인자로 받아서 새로운 배열을 생성한다.
  - `todos` 배열의 모든 요소를 새로운 배열에 복사하고, 그 뒤에 `newTodos`를 추가한다.
  - `setTodos()` 함수는 이 새로운 배열을 현재 상태로 설정한다.
  - `setTodos()` 함수 안에 콜백 함수를 넣어서 상태 업데이트 시 최신 상태 값을 안전하게 참조할 수 있도록 하였다.

## 4. `TodoList.jsx` 파일 생성 및 코드 작성

- 섹션 부분에 할 일 목록과 다 한 일 목록 리스트를 생성하는 파일

- `TodoList` 컴포넌트의 부모 컴포넌트인 `TodoContainer` 컴포넌트에서 `name`, `title`, `todos`, `setTodos` 총 4개의 props를 받아왔다.

- `setTodos` props는 현재 컴포넌트에서는 사용하지 않지만, 자식 컴포넌트인 `TodoItem` 컴포넌트에서 사용하기 위해 받아온 것이다.

- `todos` 배열에 `map()` 메서드를 사용하여 요소를 순회한다.
  - `key` 값은 각 요소의 id로 설정했다.
  - 이때, `<li>` 태그 안에 `TodoItem` 컴포넌트가 포함되어 있다.
  - 즉, 각 요소를 순회할 때마다 `TodoItem` 컴포넌트가 포함되어 있는 `<li>` 태그가 생성된다.

## 5. `TodoItem.jsx` 파일 생성 및 코드 작성

- 리스트 안에 내용을 보여주는 파일

- `TodoItem` 컴포넌트의 부모 컴포넌트인 `TodoList` 컴포넌트에서 `todo`, `setTodos` 총 2개의 props를 받아왔다.

  - `todo`는 그 안에서 또 객체 구조 분해 할당을 하여서 `id`, `title`, `content`, `isDone` 앞에 "."을 붙이지 않고 사용할 수 있게 하였다.

- 목록을 삭제하는 `deleteTodo()` 함수

  - 현재 상태인 `todos` 배열을 인자로 받아서 새로운 배열을 생성한다.
  - `todos` 배열에 `filter()` 메서드를 사용하여 각 요소를 순회한다.
    - 각 요소의 id가 부모 컴포넌트로부터 받아온 id의 값과 다른 경우에만 새로운 배열에 넣는다.
  - `setTodos()` 함수 안에 콜백 함수를 넣어서 상태 업데이트 시 최신 상태 값을 안전하게 참조할 수 있도록 하였다.

- 목록의 위치를 이동하는 `toggleTodo()` 함수
  - 현재 상태인 `todos` 배열을 인자로 받아서 새로운 배열을 생성한다.
  - `todos` 배열에 `map()` 메서드를 사용하여 각 요소를 순회한다.
    - 각 요소의 id가 부모 컴포넌트로부터 받아온 id의 값과 같은 경우에는 isDone의 값(boolean)을 반대로 바꾼 새로운 객체를 만들어서 배열에 담는다.
    - 각 요소의 id가 부모 컴포넌트로부터 받아온 id의 값과 다른 경우에는 요소를 그대로 배열에 담는다.
  - `setTodos()` 함수 안에 콜백 함수를 넣어서 상태 업데이트 시 최신 상태 값을 안전하게 참조할 수 있도록 하였다.

## 6. `App.jsx` 파일 내용 대거 수정

- `TodoContainer` 컴포넌트 안에 있는 모든 자식 요소를 보여주는 파일이다.

- `children`을 인자로 받아서 `TodoContainer` 컴포넌트로 감싸서 반환한다.
