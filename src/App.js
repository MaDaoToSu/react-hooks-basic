import { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import Clock from './components/Clock';
import Magicbox from './components/MagicBox/Magicbox';

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: "title 1" },
      { id: 2, title: "title 2" },
      { id: 3, title: "title 3" },
    ]
  );

  const [postList, setPostList] = useState([]);

  const [filters, setfilters] = useState({
    _limit: 10,
    _page: 1
  });

  // call api, run each when filters change
  useEffect(() => {
    async function fetchPostList() {
      const paramsString = queryString.stringify(filters);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log(responseJSON);

      const { data, pagination } = responseJSON;
      setPostList(data);
      setPagination(pagination);
    }

    fetchPostList()
  }, [filters]);

  // function father to passing for child 
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(p => p.id === todo.id);
    if (index < 0) return;

    // clone array to edit
    const newTodoList = [...todoList];
    newTodoList.splice(index);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(fromSubmit) {
    console.log("value is : ", fromSubmit);
    const newTodoList = [...todoList];
    const lst = {
      id: todoList.length + 1,
      ...fromSubmit,
    }
    newTodoList.push(lst);
    setTodoList(newTodoList);
  }



  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })

  function handlePageChange(newPage) {
    console.log('new page: ', newPage);
    setfilters({
      ...filters,
      _page: newPage
    })
  }
  const [stop, setStop] = useState(true);
  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      {/* <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      {/* {stop && < Clock />}
      <button onClick={() => setStop(false)}>
        Stop Clock
      </button>
      <button onClick={() => setStop(true)}>
        show Clock
      </button> */}

      <Magicbox />
    </div>
  );
}

export default App;
