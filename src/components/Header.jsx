import React from 'react'
import { useState } from 'react'
import ibtLogo from '../img/ibt.png'
import userLogo from '../img/profile.png'
import MyModal from './UI/MyModal'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context'
import BigBtn from './UI/BigBtn'



const Header = ({children}) => {


   const [modal, setModal] = useState(false)
   const cuurentPageClasses = 'font-semibold text-sky-400 text-xl mt-3 border-l-[3px] pl-1 border-tranparent w-full text-left bg-gradient-to-r from-sky-100 ';
   const pageClasses = 'font-semibold text-sky-700 text-xl mt-3 border-l-[3px] pl-1 border-sky-600 hover:border-l-[5px] hover:border-sky-400 w-full text-left '

   const logOut = () => {
      setIsAuth(false)
      localStorage.removeItem('auth');
   }

   const{isAuth, setIsAuth} = useContext(AuthContext)

   return (
      <div>
         <div className="container mx-auto flex flex-col items-center border-b-2 border-gray-300 h-[112px] relative">
               <img src={ibtLogo} className="w-[90px] absolute left-[50px] top-[10px]" alt=""/>
                  {children}
               <button className="w-[65px] absolute right-[50px] top-[25px] ring-4 border border-white ring-sky-700 rounded-full hover:ring-sky-300" onClick={()=>setModal(true)}> 
                  <div className="hover:bg-sky-700/25 rounded-full">
                     <img src={userLogo} alt="" />
                  </div>
               </button>
         </div>
         <div className="w-screen shadow-lg h-3 -mt-3"></div>
         <MyModal visible={modal} setVisible= {setModal}>

            <div className="m-4 flex flex-col">
               <img src={userLogo} alt="" className=' w-16 mx-auto' />
               <h3 className='text-2xl font-bold text-sky-800'>Музафаров Рахимбек Курамович</h3>
               <BigBtn/>
               <div className="flex flex-col items-start mx-8">
                  <Link to='/my-events' className={`${(window.location.pathname!=='/panopticon' &&  window.location.pathname!=='/event-journal')?cuurentPageClasses :pageClasses }`}>Мои события</Link>
                  <Link to='/panopticon' className={`${window.location.pathname==='/panopticon' ?cuurentPageClasses :pageClasses }`}>Паноптикум</Link>
                  <Link to='/event-journal' className={`${window.location.pathname==='/event-journal' ?cuurentPageClasses :pageClasses }`}>Журнал событий</Link>
                  <button onClick={logOut}className='font-semibold text-sky-700 text-xl mt-3 border-l-[3px] pl-1 border-sky-600 hover:border-l-[5px] hover:border-sky-400 w-full text-left '>Выход</button>
                  
               </div>

            </div>
         </MyModal>
      </div>
   )
}

export default Header