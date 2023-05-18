import React from 'react'
import { Link } from 'react-router-dom'
import Star from './Star'
import { useState } from 'react'

const RegisterForm = ({send, error}) => {
   const [fName, setFName] = useState('');
   const [lName, setLName] = useState('');
   const [mName, setMName] = useState('');
   const [phone, setPhone] = useState('');


   const sendPersonalData = (event)=>{
      event.preventDefault();
      send(lName, fName, mName, phone);
   }

   return (
      <div className='flex flex-col items-center mt-20 drop-shadow-xl'>
            <div className="border px-9 rounded-3xl bg-white flex flex-col items-center pb-4 pt-5" >

               <h3 className='text-2xl text- font-semibold mt-4 mb-9 text-sky-900'>Введите личные данные</h3>
               <form className='w-full flex flex-col' onSubmit={sendPersonalData}>

                  <div className="flex name">
                     <div className="flex flex-col w-1/3">
                        <label htmlFor="l-name" className='font-semibold text-slate-400 ml-4'>Фамилия<Star/></label>
                        <div id='l-name' className=" border-y-2 border-r rounded-l-full bg-white px-4 align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 h-fit drop-shadow-sm font-xl flex w-full">
                           <input className=" font-semibold px-3 my-2  focus:outline-none w-full" name = "lName" placeholder="" onChange={e=>setLName(e.target.value)} value={lName} required/>
                        </div>
                        
                     </div>
                     <div className="flex flex-col w-1/3">
                        <label htmlFor="f-name" className='font-semibold text-slate-400 ml-4'>Имя<Star/></label>
                        <div id='f-name' className=" border-y-2 bg-white px-1 align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 h-fit drop-shadow-sm font-xl flex w-full">
                           <input className=" font-semibold px-3 my-2  focus:outline-none w-full" name = "fName" placeholder=""  onChange={e=>setFName(e.target.value)} value={fName} required/>
                        </div>
                        
                     </div>
                     <div className="flex flex-col w-1/3">
                        <label htmlFor="m-name" className='font-semibold text-slate-400 ml-4'>Отчество</label>
                        <div id='m-name' className=" border-y-2 border-l rounded-r-full bg-white pl-1 pr-4 align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 h-fit drop-shadow-sm font-xl flex w-full">
                           <input className=" font-semibold px-3 my-2 focus:outline-none w-full" name = "mName" placeholder="" onChange={e=>setMName(e.target.value)} value={mName} />
                        </div>
                        
                     </div>
                  </div>
                  <div className="flex contacts mt-8">
                     <div className="flex flex-col w-4/12">
                        <label htmlFor="phone" className='font-semibold text-slate-400 ml-4'>Номер телефона<Star/></label>
                        <div id='phone' className=" border-y-2 rounded-full bg-white align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 h-fit drop-shadow-sm font-xl flex w-full">
                           <span className='font-semibold pb-1 pt-2 pl-3 pr-1 rounded-l-full bg-gradient-to-t from-slate-300 via-slate-200 to-slate-300 text-slate-600/75'>+992</span>
                           <input className=" font-semibold pl-1 mr-3 my-2 focus:outline-none w-full" name = "phone" placeholder=""  onChange={e=>setPhone(e.target.value)} value={phone} required/>
                        </div>
                     </div>
                     <p className='self-center w-80 ml-4 mt-4 text-rose-600 hidden'>Введите номер телефона, который зарегистрирован в системе</p>
                     
                  </div>
                  {
                     error &&
                     <div className='mt-10 mx-auto text-rose-500 text-lg '>{error}</div>

                  }
                  <button className="  hover:drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] drop-shadow-sm rounded-full px-16 py-2 mt-4 text-white bg-gradient-to-r from-sky-700 via-sky-600 to-sky-700 text-lg font-semibold mx-auto ">Отправить</button>
               </form>
               <p className='mt-16'> Если у Вас уже есть аккаунт - <Link to='/login' className='text-sky-600 underline hover:text-sky-400'>авторизуйтесь</Link> здесь</p>
            </div>
         </div>

   )
}

export default RegisterForm