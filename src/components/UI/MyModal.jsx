import React from 'react'
// import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

   const visClasses = 'fixed inset-0 bg-gray-800/75 flex justify-center items-center z-10'
   const invisClasses = 'fixed inset-0 bg-gray-800/75 hidden'

   return (
      <div className = {visible ?visClasses :invisClasses} onClick = {() => setVisible(false)}>
         <div className='p-5 bg-white rounded-3xl ' onClick = {(e)=>e.stopPropagation()}>
            {children}
         </div>
         
      </div>
   )
}

export default MyModal