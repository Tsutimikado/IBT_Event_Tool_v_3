import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AccountInfoForm = ({register, error}) => {

   const[seePass, setSeePass] = useState(false)
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const sendAccountInfo = (event) => {
      event.preventDefault();
      try{
         register(username, password);
      }catch(e){
         // console.log("Произошёл перехват в AccountInfoForm");
      }
      
   }   

   return (
      <div className='flex flex-col items-center mt-20 drop-shadow-xl '>
            <div className="border px-9 rounded-3xl bg-white flex flex-col items-center pb-4 pt-5" >
               <h3 className='text-2xl text- font-semibold mt-4 text-sky-900'>Введите данные аккаунта</h3>
               <p className='mt-2 text-sky-700 mb-9'> Эти данные будут использоваться для последующей авторизации</p>
               <form className='w-full flex flex-col' onSubmit={sendAccountInfo}>
                  <div className=" border-y-2 rounded-full bg-white px-4 py-1 align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 mt-4 h-fit drop-shadow-sm font-xl flex w-full">
                     <input className=" font-semibold px-3 my-2  focus:outline-none w-full" name = "username" placeholder="Имя пользователя" onChange={e=>setUsername(e.target.value)} value={username} required/>
                  </div>
                  <div  className=" border-y-2 rounded-full bg-white px-4 py-1 align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 mt-4 h-fit drop-shadow-sm font-xl flex w-full">
                     <input className=" font-semibold px-3 my-2  focus:outline-none w-full" name = "password" placeholder="Пароль" type={`${seePass ?'text' :'password'}`} onChange={e=>setPassword(e.target.value)} value = {password} required/>
                     <svg  className="w-5 mr-1 fill-gray-600 cursor-pointer" viewBox="0 0 488.85 488.85" onClick={()=>setSeePass(!seePass)}> 
                        <path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2 s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025 c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3 C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/>
                     </svg>
                  </div>
                  {
                     error &&
                     <div className='mt-6 text-rose-500 text-lg mx-auto'>{error}</div>
                  }
                  <button className="  hover:drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] drop-shadow-sm rounded-full px-16 py-2 mt-9 text-white bg-gradient-to-r from-sky-700 via-sky-600 to-sky-700 text-lg font-semibold mx-auto ">Зарегистрироваться</button>
               </form>
               <p className='mt-16'> Если у Вас уже есть аккаунт - <Link to='/login' className='text-sky-600 underline hover:text-sky-400'>авторизуйтесь</Link> здесь</p>
            </div>
         </div>
   )
}

export default AccountInfoForm