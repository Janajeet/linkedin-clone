import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch = useDispatch();


    const LoginToApp = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email,password)
      .then(userAuth =>{
        dispatch(login({
          email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.name,
            photoUrl: userAuth.user.photoURL,
        }))
        window.location.reload()
      }).catch(error => alert(error))
    };
    const register = () => {
      if(!name)
      {
        return alert("Please enter a full name");
      }
      auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,

        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic,
          })
          );
          window.location.reload()
        });
      })
      .catch((error) => alert(error));
    };
  return (
    <div className='login'>
        <img
        src="https://cdn.discordapp.com/attachments/892825170153205800/1019299228465496124/linkedin-logo-removebg-preview.png"
        alt = ''
        />
        <form>
            <input 
            value={name} 
            onChange={(e) => setname(e.target.value)} 
             placeholder = 'Full name (required if registering)' 
             type = "text"
             />
            <input 
            value={profilePic} 
            onChange={(e) => setprofilePic(e.target.value)}  
            placeholder = 'Profile pic(optional)'
             type = "text"/>
            <input 
            value={email} 
            onChange={(e) => setemail(e.target.value)} 
            placeholder = 'Email' 
            type = "text"
            />
            <input value={password} 
            onChange={(e) => setpassword(e.target.value)} 
             placeholder = 'Password'
             type = "password"
             />
            <button type = "submit" onClick={LoginToApp}>Sign In</button>
        </form>

        <p>
            Not a member?
            <span className='login__register' onClick={register}> Register Now!</span>
        </p>

    </div>
  )
}

export default Login