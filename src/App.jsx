import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Navigationbar from './Components/Navbar';
import PostFeed from './Components/PostFeed';
import PostForm from './Components/PostFom';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Search from './Pages/Search';
import Notification from './Pages/Notification';
import { use } from 'react';
function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users")
    return savedUsers ? JSON.parse(savedUsers) : []
  })
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  const [follow, setFollow] = useState(() => {
    const savedFollow = localStorage.getItem('follow')
    return savedFollow ? JSON.parse(savedFollow) : []
  })
  useEffect(() => {
    localStorage.setItem('follow', JSON.stringify(follow))
  }, [follow])

  const [messages,setMessages]=useState(()=>{
    const savedMessages=localStorage.getItem('messages')
    return savedMessages?JSON.parse(savedMessages):[]
  })
  useEffect(()=>{
    localStorage.setItem('messages',JSON.stringify(messages))
  },[messages])
  return (
    <div className="App ">
      <BrowserRouter>
        <Switch>

          <Route path="/post">
            <Header />
            <PostForm posts={posts} setPosts={setPosts} />
            <Navigationbar />
          </Route>

          <Route path="/notification">
            <Header />
            <Notification follow={follow} setFollow={setFollow} messages={messages} setMessages={setMessages} />
            <Navigationbar />
          </Route>

          <Route path='/search'>
            <Header />
            <Search users={users} setUsers={setUsers} />
            <Navigationbar />
          </Route>

          <Route path="/login">
            <Login users={users} setUsers={setUsers} />
          </Route>

          <Route path="/signup">
            <Signup users={users} setUsers={setUsers} />
          </Route>

          <Route path="/profile">
            <Header />
            <Profile posts={posts} setPosts={setPosts} follow={follow} setFollow={setFollow} />
            <Navigationbar />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <PostFeed posts={posts} setPosts={setPosts} follow={follow} setFollow={setFollow} />
            <Navigationbar />
          </Route>

        </Switch>

      </BrowserRouter>
      <div>

      </div>
    </div>
  );
}

export default App;
