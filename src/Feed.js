
import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOptions from './InputOptions';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';

function Feed() {
    
    const [posts, setPosts] = useState([]);

    const sendPost = (e) => {
        e.preventDefault();
    };

  return( <div className='feed'>
        <div className='feed__InputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input type="text" />
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
        {posts.map((post) => (
            <Post />
        ))}
        <Post 
        name="Janajeet Bose"
        description="This is a test"
        message="This works" />
    </div>
  );
}

export default Feed;