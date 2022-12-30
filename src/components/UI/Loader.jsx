import React from 'react'

const Loader = () => {
   return (
      <div className='relative w-fit h-fit'>
         <div className='
            rounded-full
            bg-gradient-to-r
            from-sky-300
            to-sky-700
            w-44 h-44
            animate-[spin_1.6s_linear_infinite]
            flex
            justify-center
            items-center
         '>
            <div className='
            rounded-full
            bg-white
            w-32 h-32
            '>
            </div>
         </div>
         <div className="absolute inset-0 flex justify-center items-center">
            <span className='font-bold text-sky-700 text-2xl animate-bounce'>Loading...</span>
         </div>
      </div>
   )
}

export default Loader