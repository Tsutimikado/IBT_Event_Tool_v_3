import React from 'react'
import Employee from './Employee'

const EmpList = (emps) => {
   return (
      <div>
         {emps.list.map(emp =>
            <Employee
               name={emp.name} 
               dep={emp.dep} 
               pos={emp.pos} 
               pres={emp.pres} 
               key={emp.id}
            />
         )}
      </div>
   )
}

export default EmpList