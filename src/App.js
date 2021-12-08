import React, {useState,useMemo} from 'react';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import MyButton from './Components/UI/button/MyButton';
import MySelect from './Components/UI/select/MySelect';

import MyInput from './Components/UI/input/MyInput';
import './styles/App.css';


function App() {

  let postsInner = [
    {id:1, title: 'aa', body: 'Description'},
    {id:2, title: 'gg', body: 'Description'},
    {id:3, title: 'cc', body: 'Description'}
  ];

  const [posts,setPosts] = useState(postsInner);
  const [selectedSort,setSelectedSort] = useState('');
  const [searchQuery,setSearchQuery] = useState('');

  const sortedPosts = useMemo(()=>{
    if(selectedSort) {
      return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts
    }
  },[selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  },[searchQuery, posts])

  const createPost = (newPost) =>{
    setPosts([...posts,newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=>p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }


  return (
    <div>
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <input type="text" placeholder="Поиск..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
        <MySelect value={selectedSort} onChange={sortPosts} defaultValue="Сортировка" options={[
          {value:'title',name: 'По названию'},
          {value:'body',name:'По описанию'}]}/>
      </div>
      {sortedAndSearchedPosts.length !==0
      ?       <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
      : <h1>Посты не найдены</h1>
      }

    </div>
  );
}

export default App; 