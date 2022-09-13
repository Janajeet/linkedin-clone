import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__icon'>
        <LinkedInIcon 
        sx={{
          color: "#378fe9",
           width:"3.35rem",
           height:"3.35rem",
        }}
        />
        </div>
        


           <div className='header__search'>
             <SearchIcon />
             <input placeholder = "Search" type = "text" />
           </div>
          </div>

         <div className='header__right'>
           <HeaderOption Icon ={HomeIcon} title ="Home"/>
           <HeaderOption Icon ={GroupsIcon} title ="My Network"/>
           <HeaderOption Icon ={BusinessCenterIcon} title ="Jobs"/>
           <HeaderOption Icon ={MessageIcon} title="Messaging"/>
           <HeaderOption Icon ={NotificationsActiveIcon} title="Notifications"/>
            <HeaderOption avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgithub.githubassets.com%2Fimages%2Fmodules%2Fopen_graph%2Fgithub-mark.png&f=1&nofb=1" />
      </div>
    </div>
  );
}

export default Header;