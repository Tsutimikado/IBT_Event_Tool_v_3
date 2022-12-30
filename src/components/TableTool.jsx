import React from 'react'
import SearchArea from './UI/SearchArea'
import Table from './Table'

const TableTool = React.forwardRef(({events, searchByName, searchByDep, searchBefore, searchAfter}, ref) => {
	return (
      <div>
         <SearchArea 
               searchByName={searchByName} 
               searchByDep={searchByDep } 
               searchBefore={searchBefore} 
               searchAfter={searchAfter}
            />
         <Table 
            events={events}
            searchByName={searchByName} 
            searchByDep={searchByDep }
            ref = {ref} />
         
      </div>
   )
})

export default TableTool