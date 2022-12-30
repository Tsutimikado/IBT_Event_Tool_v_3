import React from 'react'
import { useState } from 'react'

const Employee = (props) => {
   if (props.pres)
      return (
         <div className="emp ring-4 py-3 bg-emerald-200 px-10 rounded-2xl mt-3 ring-emerald-400 text-emerald-700 flex justify-between">
            <div className="flex items-center">
               <svg viewBox="0 0 96 96" className="fill-emerald-500 w-8 -ml-5 mr-3 ">
               <path d="m65.46,39.09l-3.006-3.006c-.555-.555-1.452-.555-2.004,0l-18.042,18.039-8.577-8.646c-.558-.555-1.452-.555-2.01,0l-3.006,3.009c-.555,.555-.555,1.452 0,2.004l12.579,12.669c.555,.552 1.452,.552 2.004,0l22.062-22.062c.558-.555 .558-1.452 0-2.007zm-17.46-30.09c-21.54,0-39,17.46-39,39s17.46,39 39,39 39-17.46 39-39-17.46-39-39-39zm0,69c-16.566,0-30-13.434-30-30 0-16.569 13.434-30 30-30 16.569,0 30,13.431 30,30 0,16.566-13.431,30-30,30z"/>
               </svg>
               <h3 className="text-xl font-sans font-semibold pb-1">{props.name}</h3>
            </div>

            <div className="flex flex-col border-l-emerald-500 border-l-2 sm:border-none">
               <p className='font-semibold'>{props.dep}</p>
               <p>{props.pos}</p>
            </div>
         </div>
      )
   else return (
      <div className="emp ring-4 py-3 bg-rose-200 px-10 rounded-2xl mt-3 ring-rose-400 text-rose-700 flex justify-between">
         <div className="flex items-center">
            <svg className="w-6 -ml-4 mr-4 fill-rose-500 my-1"   viewBox="0 0 32 32">
               <path d="M4.685 27.313c-6.248-6.248-6.248-16.379 0-22.627 6.25-6.248 16.379-6.248 22.629 0 6.248 6.248 6.248 16.379 0 22.627-6.25 6.249-16.379 6.249-22.629 0zM24.486 7.514c-4.688-4.687-12.285-4.687-16.971 0-4.688 4.687-4.688 12.284 0 16.971 4.686 4.687 12.283 4.687 16.971 0 4.686-4.687 4.686-12.284 0-16.971zM11.758 23.071l-2.828-2.829 4.242-4.242-4.242-4.242 2.828-2.829 4.242 4.243 4.242-4.243 2.828 2.829-4.242 4.242 4.242 4.242-2.828 2.829-4.242-4.243-4.242 4.243z"></path>
            </svg>
            <h3 className="text-xl font-sans font-semibold pb-1">{props.name}</h3>
         </div>
         <div className="flex flex-col border-l-rose-500 border-l-2 sm:border-none">
            <p className='font-semibold'>{props.dep}</p>
            <p>{props.pos}</p>
         </div>
      </div>
   )

}

export default Employee