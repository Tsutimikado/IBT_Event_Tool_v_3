import React from 'react'

import Eye from '../img/eye.png'
import { useEffect } from 'react'
import User from '../img/profile.png'
import UserInfoForm from '../components/UI/UserInfoForm'
import Loader from '../components/UI/Loader'
import { useState, useMemo } from 'react'
import ConfirmForm from '../components/UI/ConfirmForm'
import AccountInfoForm from '../components/UI/AccountInfoForm'
import $api from '../API/AxiosInstanse'
import { useRegister } from '../hooks/useRegister'
import { useContext } from 'react'
import { Context } from '..'

const Register = () => {

   useEffect(() => {
      document.title = 'Регистрация - IBT Event Tool ';
   });
   const [currentForm, setCurrentForm] = useState(0);
   const [isLoading, setIsLoading] = useState(false);
   const {store} = useContext(Context);
   
   // const [fetchPersonalInfoError, setFetchPersonalInfoError] = useState('');

   const [fetchPersonalInfo, fetchPersonalInfoError] = useRegister(setIsLoading ,async (lName, fName, mName, phone)=> {
      await $api.post('auth/register/find-personal-data', {lName, fName, mName, phone})
      .then(res=>{
         sessionStorage.setItem("code_id", res.data.code_id);
         sessionStorage.setItem("server_info", res.data.server_info);
         setCurrentForm(1);
      })
   })

   const [fetchCode, fetchCodeError] = useRegister(setIsLoading, async(code, code_id)=> {
      await  $api.post('auth/register/get-code',{code, code_id})
      .then(res=> {
         sessionStorage.removeItem('code_id');
         setCurrentForm(2);
      });
   })

   const [fetchAccountInfo, fetchAccountInfoError ] = useRegister(setIsLoading, async(username, password, server_info)=>{
      store.register(username, password, server_info);
      // await $api.post("/register/get-account-info", {username, password})
      // .then(res=> {
         
      // })
   })

   const forms = useMemo(() => {
      switch (currentForm) {
         case 0:
            return <UserInfoForm send={fetchPersonalInfo} error={fetchPersonalInfoError}/>;
         case 1:
            return <ConfirmForm confirm={fetchCode} error={fetchCodeError}/>;
         case 2:
            return <AccountInfoForm register={fetchAccountInfo} error={fetchAccountInfoError}/>;
      }
      }, [currentForm, fetchPersonalInfoError, fetchCodeError, fetchAccountInfoError]);
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