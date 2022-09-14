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
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () =>{
    dispatch(logout());
    auth.signOut();
  };

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
            <HeaderOption 
            avatar={true} 
            title ="me"
             onClick = {logoutOfApp} 
             />
           
      </div>
    </div>
  );
}

export default Header;