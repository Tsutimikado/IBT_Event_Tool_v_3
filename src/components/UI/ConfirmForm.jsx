import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ConfirmForm = ({confirm}) => {



   return (
      <div className='flex flex-col items-center mt-20 drop-shadow-xl '>
            <div className="border px-9 rounded-3xl bg-white flex flex-col items-center pb-4 pt-5" >
               <h3 className='text-2xl text- font-semibold mt-4 mb-9 text-sky-900'>Подтвердите номер телефона</h3>
               <form className='w-full flex flex-col items-center' onSubmit={confirm}>
                  <div className="flex">
                     <div className=" border-y-2 rounded-full mx-3 bg-sky-800 px-1 align-top text-white focus:ring-gray-600 focus:outline-gray-400 drop-shadow-sm text-8xl flex w-[90px] h-[90px] ">
                        <input className="font-semibold rounded-full focus:outline-none w-full bg-sky-800" name = "first" maxLength="1" type='text' required/>
                     </div>
                     <div className=" border-y-2 rounded-full mx-3 bg-sky-800 px-1 align-top text-white focus:ring-gray-600 focus:outline-gray-400 drop-shadow-sm text-8xl flex w-[90px] h-[90px]">
                        <input className="font-semibold rounded-full focus:outline-none w-full bg-sky-800" name = "second" maxLength="1" type='text' required/>
                     </div>
                     <div className=" border-y-2 rounded-full mx-3 bg-sky-800 px-1 align-top text-white focus:ring-gray-600 focus:outline-gray-400 drop-shadow-sm text-8xl flex w-[90px] h-[90px]">
                        <input className="font-semibold rounded-full focus:outline-none w-full bg-sky-800" name = "third" maxLength="1" type='text' required/>
                     </div>
                     <div className=" border-y-2 rounded-full mx-3 bg-sky-800 px-1 align-top text-white focus:ring-gray-600 focus:outline-gray-400 drop-shadow-sm text-8xl flex w-[90px] h-[90px]">
                        <input className="font-semibold rounded-full focus:outline-none w-full bg-sky-800" name = "last" maxLength="1" type='text' required/>
                     </div>
                  </div>
                  <p className='mt-6 text-rose-600 hidden'> Неверный код! Повторите попытку</p>
                  <p className='mt-16 text-sky-700'> На Ваш номер был отправлен секретный 4-значный код. Введите его в поле выше</p>
                  
                  <button className="  hover:drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] drop-shadow-sm rounded-full px-16 py-2 mt-3 text-white bg-gradient-to-r from-sky-700 via-sky-600 to-sky-700 text-lg font-semibold mx-auto ">Подтвердить</button>
               </form>
               <p className='mt-16'> Если у Вас уже есть аккаунт - <Link to='/login' className='text-sky-600 underline hover:text-sky-400'>авторизуйтесь</Link> здесь</p>
            </div>
         </div>
   )
}

export default ConfirmForm