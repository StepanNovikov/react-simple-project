import React, {useState,useRef} from 'react';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import './styles/App.css';


function App() {

  let postsInner = [
    {id:1, title: 'Javscript', body: 'Description'},
    {id:2, title: 'Java', body: 'Description'},
    {id:3, title: 'Python', body: 'Description'}
  ];

  const [posts,setPosts] = useState(postsInner);
  const [post,setPost] = useState({title:'',body:''});

  const addNewPost = (e) => {
    e.preventDefault();
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body
    // }
    // setPosts([...posts,newPost]);
    setPosts([...posts, {...post,id:Date.now()}]);
    setPost({title:'',body:''});
  }

  return (
    <div>
      <form action="">
        {/*Управляемый компонент */}
        <MyInput 
          type="text" 
          value={post.title} 
          onChange={e => setPost({...post, title: e.target.value})}
          placeholder="Название поста"
        />

        <MyInput 
          type="text" 
          placeholder="Описание поста"
          onChange={e => setPost({...post, body: e.target.value})}
          value={post.body}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App; 