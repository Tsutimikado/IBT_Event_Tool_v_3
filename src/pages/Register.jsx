import React from 'react'

import Eye from '../img/eye.png'
import { useEffect } from 'react'
import User from '../img/profile.png'
import UserInfoForm from '../components/UI/UserInfoForm'
import Loader from '../components/UI/Loader'
import { useState, useMemo } from 'react'
import ConfirmForm from '../components/UI/ConfirmForm'
import AccountInfoForm from '../components/UI/AccountInfoForm'
import { useContext } from 'react'
import { AuthContext } from '../context'


const Register = () => {

   useEffect(() => {
      document.title = 'Регистрация - IBT Event Tool ';
   });
   const{isAuth, setIsAuth} = useContext(AuthContext)
   const [currentForm, setCurrentForm] = useState(0)
   const [isLoading, setIsLoading] = useState(false)
   
   const sendUserInfo = (event) => {
      event.preventDefault();
      setIsLoading(true)
      setTimeout(()=>{
         setCurrentForm(1);
         setIsLoading(false)
      },1500)
   }

   const confirmPhone = (event) => {
      event.preventDefault();
      setIsLoading(true)
      setTimeout(()=>{
         setCurrentForm(2);
         setIsLoading(false)
      },1500)
   }

   const sendAccountInfo = (event) => {
      event.preventDefault();
      setIsLoading(true)
      setTimeout(()=>{
         setIsAuth(true)
         localStorage.setItem('auth', 'true')
      },1500)
   }

   const forms = useMemo(() => {
      switch (currentForm) {
         case 0:
            return <UserInfoForm send={sendUserInfo}/>;
         case 1:
            return <ConfirmForm confirm={confirmPhone}/>;
         case 2:
            return <AccountInfoForm register={sendAccountInfo}/>;
      }
      }, [currentForm]);
   return (
      <div className='bg-slate-100 h-screen pt-8'>
         <div className="flex flex-col items-center w-full bg-white mx-auto">
            <div className="flex items-center relative ml-[100px]">
               <div className="rounded-full absolute left-[-128px] bg-white">
                  <img  className='w-32 ring rounded-full ring-sky-800 border-2' src={User} alt=""/>
               </div>
               <div className="flex flex-col w-fit ml-2">
                  <h1 className='text-5xl font-semibold text-sky-800 flex items-end'>IBT Event To<img src={Eye} className='w-[25px] h-[25px] ml-[2px] mb-1'/>l</h1>
                  <p className='text-sky-800 text-xl'>Регистрация нового пользователя</p>
               </div>
            </div>
         </div>
         {isLoading
         ?<div className="flex justify-center mt-32"><Loader/></div>
         : forms
         }

      </div>
   )
}

export default Register