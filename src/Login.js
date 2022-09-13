import React from 'react'
import './Login.css'

function Login() {
    const LoginToApp = () => {};
    const register = () => {};
  return (
    <div className='login'>
        <img
        src="https://cdn.discordapp.com/attachments/892825170153205800/1019299228465496124/linkedin-logo-removebg-preview.png"
        alt = ''
        />
        <form>
            <input placeholder = 'Full name (required if registering)' type = "text"/>
            <input placeholder = 'Profile pic(optional)' type = "text"/>
            <input placeholder = 'Email' type = "text"/>
            <input placeholder = 'Password' type = "password"/>
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