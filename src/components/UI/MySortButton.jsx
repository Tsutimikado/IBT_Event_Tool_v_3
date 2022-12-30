import React from 'react'
import { useState } from 'react'

const MySortButton = ({sort, sortEmps}) => {

   const [isVisible, setIsVisible] = useState(false)
   return (
      <div className = 'rounded-r-xl pl-3 pr-2 cursor-pointer hover:bg-gray-100 relative' onClick={()=> setIsVisible(!isVisible)}>
         <svg className="mt-2" id="sort" width="27" height="27" aria-expanded="true" aria-haspopup="true" >
            <line className="stroke-gray-400 " x1="0" y1="6"  x2="22" y2="6"  style={{strokeWidth: 3}}/>
            <line className="stroke-gray-400 " x1="0" y1="13" x2="16" y2="13" style={{strokeWidth: 3}}/>
            <line className="stroke-gray-400 " x1="0" y1="20" x2="9"  y2="20" style={{strokeWidth: 3}} />
         </svg>
         {isVisible &&
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" >
               <div className="py-1" role="none">
                  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={()=>{sortEmps('name');}}>По имени (А-Я)</button>
                  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={()=>{sortEmps('-name');}}>По имени (Я-А)</button>
                  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={()=>{sortEmps('dep');}}>По отделу (А-Я)</button>
                  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={()=>{sortEmps('-dep');}}>По отделу (Я-А)</button>
                  {/* <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={()=>{sortEmps('pres');}}>Присутсвующие</button>
                  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={()=>{sortEmps('-pres');}}>Отсутсвующие</button> */}
                  
                  
               </div>
            </div>
         }
      </div>
   )
}

export default MySortButton