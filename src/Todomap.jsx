import React from 'react'
const Todomap = () => {
const task=[{taskno: 1, task: 'do homework' },
                    {taskno: 2, task: 'study' },
                    {taskno: 3, task: 'clean the room' },
                    {taskno: 4, task: 'exersice' },]                            
  return (
    <div>
       {task.map((item) => (
        <div>
          <h2>{item.taskno}</h2>
          <h2>{item.task}</h2>
       </div>
     ))}                     
    </div>
  )
}
export default Todomap