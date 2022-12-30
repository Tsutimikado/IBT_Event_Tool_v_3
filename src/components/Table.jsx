import React from 'react'

const Table = React.forwardRef(({events}, ref) => {
   return (
      <div className="mt-12 rounded-2xl border-2 overflow-hidden border-sky-400 mb-6 drop-shadow-[0_-5px_8px_rgba(0,0,0,0.25)]">
         <table className='table-auto mx-auto border-collapse rounded-lg w-full'>
            <thead>
               <tr className=' text-sky-100/75 text-left tracking-wide bg-sky-800'>
                  <th className='border-r-2 border-sky-300 px-3 pb-1 pt-6 font-semibold'>ФИО</th>
                  <th className='border-r-2 border-sky-300 px-3 pb-1 pt-6 font-semibold'>ОТДЕЛ</th>
                  <th className='border-r-2 border-sky-300 px-3 pb-1 pt-6 font-semibold'>ДОЛЖНОСТЬ</th>
                  <th className='border-r-2 border-sky-300 px-3 pb-1 pt-6 font-semibold'>ЗДАНИЕ</th>
                  <th className='border-r-2 border-sky-300 px-3 pb-1 pt-6 font-semibold'>ДЕЙСТВИЕ</th>
                  <th className='border-l-2 border-sky-300 px-3 pb-1 pt-6 font-semibold'>ВРЕМЯ</th>
               </tr>
            </thead>
            <tbody className='text-sky-900 font-me text-lg'>
               {events.map(e=>
                  <tr key={e.id} className={`${e.act ?'bg-emerald-100 text-emerald-700' :'bg-rose-100 text-rose-700'}`}>
                     <td className='py-1 px-3 border-t-2 border-r-2 border-sky-300'>{e.name}</td>
                     <td className='py-1 px-3 border-t-2 border-r-2 border-sky-300'>{e.dep}</td>
                     <td className='py-1 px-3 border-t-2 border-r-2 border-sky-300'>{e.pos}</td>
                     <td className='py-1 px-3 border-t-2 border-r-2 border-sky-300'>{e.building}</td>
                     <td className='py-1 px-3 border-t-2 border-r-2 border-sky-300'>{e.act ?'in' :'out'}</td>
                     <td className='py-1 px-3 border-t-2 border-sky-300'>{e.time}</td>
                  </tr>
               )}
            </tbody>
         </table>
         <div className='bg-sky-700 w-full h-4 text-sm font-extrabold text-center text-white tracking-widest' ref = {ref}>Конец списка</div>
      </div>
   )
})

export default Table