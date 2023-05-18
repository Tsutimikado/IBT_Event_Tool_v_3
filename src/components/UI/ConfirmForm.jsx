import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useRegister } from '../../hooks/useRegister'

const ConfirmForm = ({confirm, error}) => {

   const [one, setOne] = useState("");
   const [two, setTwo] = useState("");
   const [three, setThree] = useState("");
   const [four, setFour] = useState("");
   const [code, setCode] = useState('');

   const sendCode = (event)=> {
      event.preventDefault();
      confirm(code);
   }

   const trapChange = (e) => {
      setCode(e.target.value) ;

      if(e.target.value[0]!=undefined && e.target.value[0]!='') {
         setOne(e.target.value[0]);
         } 
      else {
         setOne('');
         
      };
      if(e.target.value[1]!=undefined && e.target.value[1]!='') setTwo(e.target.value[1]);
      else setTwo('');
      if(e.target.value[2]!=undefined && e.target.value[2]!='') setThree(e.target.value[2]);
      else setThree('');
      if(e.target.value[3]!=undefined && e.target.value[3]!='') setFour(e.target.value[3]); 
      else setFour(''); 
   }

   const trap = (event, selection)=>{
      document.getElementById("code").focus();
   }

   return (
      <div className='flex flex-col items-center mt-20 drop-shadow-xl '>
            <div className="border px-9 rounded-3xl bg-white flex flex-col items-center pb-4 pt-5" >
               <h3 className='text-2xl text- font-semibold mt-4 mb-9 text-sky-900'>Подтвердите номер телефона</h3>
               <form className='w-full flex flex-col items-center' onSubmit={sendCode}>
                  <div className="flex">
                     <div className=" border-y-2 rounded-full mx-3 bg-sky-800 px-1 align-top text-white drop-shadow-sm text-8xl flex w-[90px] h-[90px] ">
                        <input className="font-semibold rounded-full focus:outline-none w-full bg-sky-800" name = "one" maxLength="1" type='text' value={one} onClick={e=>trap(e,0)} readOnly required/>
                     </div>
                     <div className=" border-y-2 rounded-full mx-3 bg-sky-800 px-1 align-top text-white drop-shadow-sm text-8xl flex w-[90px] h-[90px]">
                        <input className={"font-semibold rounded-full focus:outline-none w-full bg-sky-800"} name = "two" maxLength="1" type='text' value={two} onClick={e=>trap(e,1)} readOnly required/>
                     </div>
                     <div className=" border-y-2 rounded-full mx-3 bg-sky-800 px-1 align-top text-white drop-shadow-sm text-8xl flex w-[90px] h-[90px]">
                        <input className={"font-semibold rounded-full focus:outline-none w-full bg-sky-800 "} name = "three" maxLength="1" type='text' value={three} onClick={e=>trap(e,2)} readOnly required/>
                     </div>
                     <div className=" border-y-2 rounded-full mx-3 bg-sky-800 px-1 align-top text-white drop-shadow-sm text-8xl flex w-[90px] h-[90px]">
                        <input className={"font-semibold rounded-full focus:outline-none w-full bg-sky-800"} name = "four" maxLength="1" type='text' value={four} onClick={e=>trap(e,3)} readOnly required/>
                     </div>
                  </div>
                  <input name="code" id="code" className='w-[0px]' onChange={e=>trapChange(e)} value={code} maxLength={4}/>
                  {
                     error &&
                     <div className='mt-6 text-rose-500 text-lg '>{error}</div>
                  }
                  <p className='mt-16 text-sky-700'> На Ваш номер был отправлен секретный 4-значный код. Введите его в поле выше</p>
                  
                  <button className="  hover:drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] drop-shadow-sm rounded-full px-16 py-2 mt-3 text-white bg-gradient-to-r from-sky-700 via-sky-600 to-sky-700 text-lg font-semibold mx-auto ">Подтвердить</button>
               </form>
               <p className='mt-16'> Если у Вас уже есть аккаунт - <Link to='/login' className='text-sky-600 underline hover:text-sky-400'>авторизуйтесь</Link> здесь</p>
            </div>
         </div>
   )
}

export default ConfirmForm