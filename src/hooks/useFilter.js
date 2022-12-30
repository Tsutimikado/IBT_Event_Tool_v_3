// import { useMemo } from "react"

// export const useFilter = (events, nameQuery, depQuery,beforeQuery, afterQuery) => {
//    const searchEventsND= useMemo(() => {
//       return events.filter(event => event.name.toLowerCase().includes(nameQuery.toLowerCase()))
//          .filter(event => event.dep.toLowerCase().includes(depQuery.toLowerCase()))
//    },[filter.nameQuery, filter.depQuery])
//    const searchTimeAfter = useMemo(() => {
//       if (afterQuery)
//          return searchEventsND.filter(event => Date.parse(event.time)>=Date.parse(afterQuery))
//       else return searchEventsND
//    },[filter.afterQuery, searchEventsND])
//    const searchEvents= useMemo(() => {
//       if (beforeQuery)
//          return searchTimeAfter.filter(event => Date.parse(event.time)<=Date.parse(beforeQuery))
//       else return searchTimeAfter
//    },[filter.beforeQuery,searchTimeAfter])
//    return searchEvents;
// }