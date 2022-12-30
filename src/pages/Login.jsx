import React from 'react'
import Logo from '../img/ibt.png'
import Eye from '../img/eye.png'
import { useEffect } from 'react'
import User from '../img/profile.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import axios from 'axios'
import { useState } from 'react'
import { CookieContext } from '../context'
import { Context } from '..'
import { observe } from 'mobx'

const Login = () => {
   
   const [usernameInp, setUsernameInp ]= useState('');
   const [passwordInp, setPasswordInp ]= useState('');


   useEffect(() => {
      document.title = 'Авторизация - IBT Event Tool ';
   });

   const {store} = useContext(Context);
   // const{isAuth, setIsAuth} = useContext(AuthContext);
   // const{cookie, setCookie} = useContext(CookieContext);

   const login = (event)=> {
      event.preventDefault();
      store.login(usernameInp, passwordInp);
      // axios.post("https://localhost:7073/login", {
      //    username: usernameInp,
      //    password: passwordInp
      // })
      // .then((res) =>{
      //    setIsAuth(true);
      //    localStorage.setItem('auth', 'true');
      //    let tokenKey = "accessToken";
      //    localStorage.setItem(tokenKey, res.data.access_token);

      // })
      // .catch(err => console.log(err));

      

      // setIsAuth(true)
      // localStorage.setItem('auth', 'true')
   }
   return (
      <div className='bg-slate-100 h-screen pt-8'>
         <div className="flex flex-col items-center w-full bg-white mx-auto">
            <div className="flex items-center relative ml-[100px]">
               <div className="rounded-full absolute left-[-128px] bg-white">
                  <img  className='w-32' src={Logo} alt=""/>
               </div>
               <div className="flex flex-col w-fit ml-2">
                  <h1 className='text-5xl font-semibold text-sky-800 flex items-end'>IBT Event To<img src={Eye} className='w-[25px] h-[25px] ml-[2px] mb-1'/>l</h1>
                  <p className='text-sky-800 text-xl'>WEB приложение для мониторинга персонала</p>
               </div>
            </div>
         </div>

         <div className='flex flex-col items-center mt-20 drop-shadow-xl'>
            <div className="border p-9 rounded-3xl bg-white flex flex-col items-center w-[500px] pb-4" >
               <img src={User} className='w-20 border border-white ring-2 ring-sky-700 rounded-full' />
               <h3 className='text-2xl text- font-semibold mt-4 mb-9 text-sky-900'>Войдите в систему</h3>
               {/* <form className='w-full flex flex-col' onSubmit={login}> */}
               <form className='w-full flex flex-col' onSubmit={login}>
                  <div className=" border-y-2 rounded-full bg-white px-4 py-1 align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 mt-4 h-fit drop-shadow-sm font-xl flex w-full">
                     <input className=" font-semibold px-3 my-2  focus:outline-none w-full" name = "username" placeholder="Username" onChange={e=> setUsernameInp(e.target.value)} value={usernameInp} required/>
                  </div>
                  <div  className=" border-y-2 rounded-full bg-white px-4 py-1 align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 mt-4 h-fit drop-shadow-sm font-xl flex w-full">
                     <input className=" font-semibold px-3 my-2  focus:outline-none w-full" name = "password" placeholder="Password" onChange={e=> setPasswordInp(e.target.value)} type='password' autoComplete="on" value={passwordInp} required/>
                  </div>
                  <button className="  hover:drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] drop-shadow-sm rounded-full px-16 py-2 mt-9 text-white bg-gradient-to-r from-sky-700 via-sky-600 to-sky-700 text-lg font-semibold mx-auto ">Войти</button>
               </form>
               <p className='mt-16'> Или же <Link to='/register' className='text-sky-600 underline hover:text-sky-400'>зарегистрируйтесь</Link> здесь</p>
            </div>
         </div>
      </div>
   )
}

export default observe( Login)