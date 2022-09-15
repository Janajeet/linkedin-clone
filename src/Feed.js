
import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOptions from './InputOptions';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './firebase';
// import { set } from 'immer/dist/internal';
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc")
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))

        )
        )
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message: input,
            photoUrl:user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("")
    };

  return( <div className='feed'>
        <div className='feed__InputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input 
                        value={ input } 
                        onChange = {(e) => setInput(e.target.value)}
                        type = "text"/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOptions Icon={ImageIcon} title ="Photo" color ="#378fe9"/>
                <InputOptions Icon={YouTubeIcon} title ="Video" color ="#5f9b41"/>
                <InputOptions Icon={EventIcon} title ="Events" color ="#c37d16"/>
                <InputOptions Icon={ArticleIcon} title ="Write article" color ="#e16745"/>
            </div>
        </div>
        <FlipMove>
        {posts.map(({id, data:{ name, description, message, photoUrl}}) => (
            <Post 
            key={id}
            name={name}
            description = {description}
            message = {message}
            photoUrl = {photoUrl}
            />
            ))}
        </FlipMove>
        
        
        {/* <Post 
        name="Janajeet Bose"
        description="This is a test"
        message="This works" /> */}
    </div>
  );
}

export default Feed;