import React, { useContext,useState,useEffect } from 'react'
import {Route, Routes} from "react-router-dom";
import { privateRoutes, publicRoutes } from '../router/routes';
import Login from '../pages/Login';
import { WorkContext } from '../context';
import MyEvents from '../pages/MyEvents';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import Loader from './UI/Loader';

const AppRouter = () => {

   const {store} = useContext(Context);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(()=>{
      
         try{
            if(localStorage.getItem('access_token')){
            store.checkAuth()}
         }
         catch(e){

         }
         finally{
            setIsLoading(false);
         }

   }, [])
   
   
   const [isWorking, setIsWorking] = useState(false);
   return (
      isLoading? <div className='flex justify-center mt-9'><Loader/></div>
      :store.isAuth
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

export default observer(AppRouter)