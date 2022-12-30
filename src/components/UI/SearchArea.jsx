import React from 'react'
import { useRef } from 'react'

const SearchArea = ({searchByName,searchByDep, searchBefore, searchAfter}) => {

   const before = useRef()
   const after = useRef()
   return (
      <div className='flex rounded-full drop-shadow-md w-full'>
         <div className=" w-3/6 border-2 rounded-full mr-1 bg-white px-4 py-1 text-lg text-gray-600 focus:ring-gray-600 focus:outline-gray-400 mt-4 h-fit drop-shadow font-xl flex">
            <p className='my-1 pl-3 font-semibold mr-1 text-slate-400'>ФИО: </p>
            <input className="font-semibold my-1  text-lg focus:outline-none w-full" type="text" name = "new-task-name" placeholder="" onChange={searchByName}/>
         </div>
         <div className="w-4/12 border-2 rounded-full mr-1 bg-white px-4 py-1 text-lg text-gray-600 focus:ring-gray-600 focus:outline-gray-400 mt-4 h-fit drop-shadow font-xl flex">
            <p className='my-1 pl-3 font-semibold mr-1 text-slate-400'>ОТДЕЛ: </p>
            <input className="font-semibold my-1  text-lg focus:outline-none w-full" type="text" name = "new-task-name" placeholder="" onChange={searchByDep} />
         </div>
         <div className=" w-4/12 border-2 rounded-full mr-1 bg-white px-4 py-1 text-lg text-gray-600 focus:ring-gray-600 focus:outline-gray-400 mt-4 h-fit drop-shadow font-xl flex">
            <p className='my-1 pl-3 font-semibold mr-1 text-slate-400'>С: </p>
            <input className="font-semibold my-[3px] text-lg focus:outline-none w-full" type="datetime-local" name = "new-task-name" placeholder=""  onChange={searchAfter} ref={after} />
            <p className='my-1 pl-3 font-semibold mr-1 text-slate-400' >ДО: </p>
            <input className="font-semibold my-[3px] text-lg focus:outline-none w-full" type="datetime-local" name = "new-task-name" placeholder=""  onChange={searchBefore} ref={before}/>
            <button onClick={(e)=> {after.current.value = ''; before.current.value = ('');searchAfter(e)}}>
               <svg className="w-6 fill-slate-500 ml-2"   viewBox="0 0 32 32">
                  <path d="M4.685 27.313c-6.248-6.248-6.248-16.379 0-22.627 6.25-6.248 16.379-6.248 22.629 0 6.248 6.248 6.248 16.379 0 22.627-6.25 6.249-16.379 6.249-22.629 0zM24.486 7.514c-4.688-4.687-12.285-4.687-16.971 0-4.688 4.687-4.688 12.284 0 16.971 4.686 4.687 12.283 4.687 16.971 0 4.686-4.687 4.686-12.284 0-16.971zM11.758 23.071l-2.828-2.829 4.242-4.242-4.242-4.242 2.828-2.829 4.242 4.243 4.242-4.243 2.828 2.829-4.242 4.242 4.242 4.242-2.828 2.829-4.242-4.243-4.242 4.243z"></path>
               </svg>
            </button>
         </div>
      </div>
   )
}

export default SearchArea