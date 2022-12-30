
import { BrowserRouter} from "react-router-dom";

import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";


function App() {

   // useEffect(()=>{
   //    if(localStorage.getItem('auth')){
   //       setIsAuth(true)
   //    }
   // }, [])
   // const [isAuth, setIsAuth] = useState(false)

   return (

               <BrowserRouter>
                  <AppRouter/>
               </BrowserRouter>
   )

}

export default App;
