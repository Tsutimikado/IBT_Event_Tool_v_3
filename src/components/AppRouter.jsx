import React, { useContext,useState } from 'react'
import {Route, Routes} from "react-router-dom";
import { privateRoutes, publicRoutes } from '../router/routes';
import Login from '../pages/Login';
import { WorkContext } from '../context';
import MyEvents from '../pages/MyEvents';
import { Context } from '..';
import { observe } from 'mobx';

const AppRouter = () => {
   const {store} = useContext(Context);
   const [isWorking, setIsWorking] = useState(false)
   return (
      store.isAuth
         ?  <WorkContext.Provider value={{isWorking, setIsWorking}}>
               <Routes>
                  {privateRoutes.map(route =>
                     <Route path={route.path} element={route.element} key ={route.path}/>
                  )}
                  <Route path='*' element={<MyEvents/>}/>
               </Routes>
         </WorkContext.Provider>
         :  <Routes>
               {publicRoutes.map(route =>
                  <Route path={route.path} element={route.element} key ={route.path}/>
               )}
               <Route path='*' element={<Login/>}/>
            </Routes>
      
   )
}

export default observe( AppRouter)