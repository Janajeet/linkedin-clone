import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';
import RecentItems from './RecentItems';

function Sidebar () {

//    const recentItem = (topic) =>
//         <div className='sidebar__recentItems'>
//              <span className='sidebarHash'>#</span>
//              <p>{topic}</p>
//         </div>
  return (
    <div className="sidebar">
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80'     alt='' />
            <Avatar className='sidebar__avatar'/>
            <h2>Janajeet Bose</h2>
            <h4>janajeetbose@gmail</h4> 
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2554</p> 
            </div>
            <div className='sidebar__stat'>
                <p>Who viewed your post</p>
            <p className='sidebar__statNumber'>2443</p> 
            </div> 
            
        </div>
        <div className='sidebar__bottom'>
                <p>Recent</p>
                <RecentItems topic = "ReactJs" />
                <RecentItems topic = "Software" />
                <RecentItems topic = "Programming" />
                <RecentItems topic = "Technology" />
            </div> 
    </div>
  )
}

export default Sidebar;