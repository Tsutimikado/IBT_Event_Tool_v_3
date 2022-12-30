import React from 'react'
import PostService from '../API/PostService'
import EventJournal from './EventJournal'
import { useEffect } from 'react'

const MyEvents = () => {

   useEffect(() => {
      document.title = 'Мои события - IBT Event tool';
   });

   return (
      <EventJournal eventAPI={PostService.getMyEvents}/>

   )
}

export default MyEvents