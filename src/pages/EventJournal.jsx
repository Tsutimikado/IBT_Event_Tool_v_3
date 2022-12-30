import React from 'react'
import { useMemo, useRef } from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

import { useEffect } from 'react'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader'
import TableTool from '../components/TableTool'
import { useFetching } from '../hooks/useFetching'
import { getPagesCount } from '../utils/pageCounter'

const EventJournal = ({eventAPI}) => {

   const [events, setEvents] = useState([])
   const [nameQuery, setNameQuery] = useState('')
   const [depQuery, setDepQuery] = useState('')
   const [beforeQuery, setBeforeQuery] = useState('')
   const [afterQuery, setAfterQuery] = useState('')
   const [totalPages, setTotalPages] = useState(0)
   const [limit, setLimit] = useState(40)
   const [page, setPage] = useState(1)

   const lastElement = useRef()
   const observer = useRef()

   // const pagesArray = useMemo(()=>{
   //    let arr = []
   //    for(let i = 1; i<= totalPages; i++) {
   //       arr.push(i)
   //    }
   //    return arr
   // }, [totalPages])
      
   const [fetchEvents, isEventsLoading, eventsError] = useFetching(async (limit, page)=> {
      const response = await eventAPI(limit, page);
      setEvents([...events, ...response.data])
      setTotalPages(getPagesCount(response.headers['x-total-count'], limit));
   })

   useEffect(()=> {
      if(isEventsLoading) return;
      if(observer.current) observer.current.disconnect()
      let callback = (entries, observer) => {
         if(entries[0].isIntersecting && page < totalPages){
            setPage(page+1)
         }
      }
      observer.current = new IntersectionObserver(callback);
      observer.current.observe(lastElement.current)
   }, [isEventsLoading])

   useEffect(() => {
      fetchEvents(limit, page)
   },[limit, page])

   const searchEventsND= useMemo(() => {
      return events.filter(event => event.name.toLowerCase().includes(nameQuery.toLowerCase()))
         .filter(event => event.dep.toLowerCase().includes(depQuery.toLowerCase()))
   },[nameQuery, depQuery, events])

   const searchTimeAfter = useMemo(() => {
      if (afterQuery)
         return searchEventsND.filter(event => Date.parse(event.time)>=Date.parse(afterQuery))
      else return searchEventsND
   },[afterQuery, searchEventsND])

   const searchEvents= useMemo(() => {
      if (beforeQuery)
         return searchTimeAfter.filter(event => Date.parse(event.time)<=Date.parse(beforeQuery))
      else return searchTimeAfter
   },[beforeQuery,searchTimeAfter])

   return (
      
      <div>
         <Header>
            <h1 className='font-semibold text-sky-800 text-2xl my-auto lg:text-7xl md:text-5xl sm:text-4xl'>Журнал событий</h1>
         </Header>
         <Main>


         
         <TableTool
               events = {searchEvents}
               searchByName = {e=>setNameQuery(e.target.value)} 
               searchByDep = {e=>setDepQuery(e.target.value) } 
               searchBefore = {e=>setBeforeQuery(e.target.value)} 
               searchAfter = {e=>setAfterQuery(e.target.value)}
               ref = {lastElement}
            />

         {isEventsLoading &&
            <div className="flex justify-center mt-16"><Loader/></div>
         }

         {eventsError &&
            <h1>ERROR {eventsError}</h1>   
         }
         </Main>
      </div>
   )
}

export default EventJournal