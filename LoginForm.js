import React from 'react'

export default function LoginForm() {
    const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-back'>
                <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
                    Login
                </button>
                <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
                    Signup
                </button>
            </div>
            {isLogin ? (
                    <div className='form'>
                     <h2>Login</h2>
                     <input type='text' placeholder='Username' />
                    <input type='password' placeholder='Password' />
                    <a href='#'>Forgot password?</a>
                    <button type='submit'>Login</button>
                    <p>Don't have an account? <a href='#' onClick={()=> setIsLogin(false)}>Signup now</a></p>
                </div>
            ) : (
                <div className='form'>
                    <h2>Register</h2>
                   <input type='text' placeholder='Username' />
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button type='submit'>Signup</button>
                    <p>Already have an account? <a href='#' onClick={()=> setIsLogin(true)}>Login now</a></p>
                </div>
            )}
        </div>
    </div>
  )
}
