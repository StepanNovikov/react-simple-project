import React,{useState} from 'react'
import MyButton from '../Components/UI/button/MyButton';
import MyInput from '../Components/UI/input/MyInput';

const PostForm = ({create}) => {

    const [post,setPost] = useState({title:'',body:''});


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id:Date.now()
        }
        create(newPost)
        setPost({title:'',body:''});
    }

    return (
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
    )
}

export default PostForm
