import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import EmpList from '../components/EmpList'
import MyInput from "../components/UI/MyInput";
import Loader from "../components/UI/Loader";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";

function RealTime() {

   const [sort, setSort] = useState('name')
   const [searchQuery, setSearchQuery] = useState('')
   const [emps, setEmps] = useState( [])

   const [fetchEmployees, isEventsLoading, eventsError] = useFetching( async ()=> {
      const response = await PostService.getAll();
      setEmps(response.data)
   })

   useEffect(() => {
      document.title = 'Паноптикум - IBT Event Tool';
   });

   useEffect(() => {
      sortEmps('name')
      fetchEmployees()
   }, [])
   

   const sortEmps = (sort) => {
      setSort(sort);
         if (sort[0] === '-')
            setEmps([...emps].sort((a,b)=> b[sort.slice(1)].localeCompare(a[sort.slice(1)])))
         else 
            setEmps([...emps].sort((a,b)=> a[sort].localeCompare(b[sort])))
   }

   const searchPosts = useMemo(() => {
      return emps.filter(emp => emp.name.toLowerCase().includes(searchQuery.toLowerCase()))
   }, [searchQuery, emps])

   return (
      <div>
         <Header>
            <MyInput sort = {sort} sortEmps = {sortEmps} onChange = {e => setSearchQuery(e.target.value)} withButton = {false}/>
         </Header>

         <Main>
            {isEventsLoading 
               ?  <div className="flex justify-center mt-16"><Loader/></div>
               :  <div className="flex flex-col mt-9 max-w-[1025px] mx-auto px-16">
                     {/* <button className='border-2 border-teal-400 bg-teal-200 rounded-full w-fit p-3' onClick={toggleHere}>toggle</button> */}
                     <h1 className="text-3xl font-bold text-sky-800 mb-1">ОТДЕЛ крутых шышек:</h1> {/* //Имя пользователя и остальные дынне будут в панели пользователя */}
                     <EmpList list= {searchPosts}/>
                  </div>
            }
            {eventsError &&
               <h1>ERROR {eventsError}</h1>   
            }
         </Main>
      </div>  
   );
}

export default RealTime;
