import React, { useState, useContext } from 'react'
import '../../../styles/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../utility/firebase'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { DataContext } from '../../Dataprovider/DataProvider'
import { Type } from '../../../utility/action.type'
import { ClipLoader } from 'react-spinners'


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLodding] = useState({
    signIn:false,
    signUp:false})

  const [{user}, dispatch] =useContext(DataContext)

  const navigate =useNavigate()


console.log(user)

  // const auth = getAuth();

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);// the same object for both signin and signup

    if (e.target.name === "signin") {
      setLodding({...Loading, signIn:true})
      // Firebase Sign-In
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo); // Successfully signed in
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user
          });
          setLodding({...Loading, signIn:false})
          navigate('/')
        })
        .catch((err) => {
          // console.error(err.message); // Handle errors here
          setError(err.message)
          setLodding({...Loading, signUp:false})
        });
    } else {
      // Firebase Sign-Up
      setLodding({...Loading, signUp:true})
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => { 
          // console.log(userInfo); // Successfully created user
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user
          });
          setLodding({...Loading, signUp:false})
          navigate('/')

        })
        .catch((err) => {
          // console.error(err); // Handle errors here
          setError(err.message)
          setLodding({...Loading, signUp:false})
        });
    }
  };

  
  // console.log(password, email);

  return (
    <>
    <section className='login'>
    {/* Logo */}
    <Link to="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="Amazon Logo"
      />
    </Link>
    {/* Form or other content */}

    <div className='login__container'>
      <h1>Sign in</h1>
      <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" 
                   id="email"
                   onChange={(e)=>setEmail(e.target.value)} 
             />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" 
                   id="password"
                   onChange={(e)=>setPassword(e.target.value)}
             />
          </div>
          <button type='submit' name='signin' onClick={authHandler} className='login__signInButton'> 
              {Loading.signIn ? (
                <ClipLoader color='#000' size ={15}/>
              ):('Sign In')}
          </button>
          
      </form>

      {/* agrement */}
      <p>
        By signing-in you agree to the <strong>AMAZON FAKE CLONE</strong> Conditions of Use & Sale. 
        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
     </p>
     {/* create account */}
     <button type='submit' name='signup' className='login__registerButton' onClick={authHandler}>
     {Loading.signUp ? (
                <ClipLoader color='#000' size ={15}/>
              ):(' Create your fake amazone account')}

     </button>

     {
      error &&  <smaill style ={{paddinTop: '5px', color:'red'}}>{error}</smaill>
     }

    </div>
  </section>
  </>
  )
}

export default Auth

