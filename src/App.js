
import { BrowserRouter} from "react-router-dom";

import AppRouter from "./components/AppRouter";

import { useContext, useEffect, useState } from "react";

import { observer } from "mobx-react-lite";
import { Context } from ".";
import Loader from "./components/UI/Loader";


function App() {


   return (
      <BrowserRouter>
         <AppRouter/>
      </BrowserRouter>
   )

}

export default observer( App);
