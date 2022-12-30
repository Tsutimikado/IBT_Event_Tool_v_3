import React from 'react'
import EventJournal from './EventJournal'
import PostService from '../API/PostService'
import { useEffect } from 'react'

const DepEvents = () => {

   useEffect(() => {
      document.title = 'Журнал событий - IBT Event tool';
   });

	return (
		<EventJournal eventAPI={PostService.getNextEvents}/>
	)
}

export default DepEvents