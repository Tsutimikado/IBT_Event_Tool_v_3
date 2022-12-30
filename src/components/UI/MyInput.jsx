import React from 'react'
import MySortButton from './MySortButton.jsx'

const MyInput = ({sort, sortEmps, onChange, withButton}) => {
   return (
      <div className="flex flex-col items-center mb-4 w-7/12">
         <div id = 'newinp' className="  border-2 rounded-full bg-white px-4 py-1 relative text-lg align-top text-gray-600 focus:ring-gray-600 focus:outline-gray-400 mt-4 h-fit drop-shadow font-xl flex w-full">
            <input className="border-r-2 font-bold px-3 my-2  text-lg focus:outline-none w-full" type="text" name = "new-task-name" placeholder="ФИО" required onChange = {onChange}/>
            <MySortButton sort = {sort} sortEmps = {sortEmps}/>
         </div>
         {withButton 
            ?<button className="align-middle  w-11/12 font-bold text-sky-100 bg-sky-800  pt-2 rounded-b-full font-sans text-lg hover:bg-sky-400 -mt-3"> SEARCH</button>
            :<button className="align-middle  w-11/12 font-bold text-sky-100 bg-sky-800  pt-2 rounded-b-full font-sans text-lg -mt-3 cursor-default"> SEARCH</button>
         }
      </div>
   )
}

export default MyInput