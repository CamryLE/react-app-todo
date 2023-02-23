import React from 'react';
import { useState } from 'react'

const Task = ({task,  delTask, crossTask}) => {




   

 

  let [showDel, setDel] = useState(false);
  
 
  return (
    <ol
    draggable  
    className={`a-task ${task.completed ? 'crossed' : ''} ` }
    onMouseEnter={() => setDel(true)}
    onMouseLeave={() => setDel(false)}
    >
    <div  onClick={() => crossTask(task.id)} className={`task-added ${task.completed ? 'crossed' : ''}` }
    
    >
    
      
        <button className={`checkbox ${task.completed ? 'checked' : ''}` }>
         <svg className='checkmark' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg> 
        </button>
          <div  className='task-text-container'>
            <div  className>
              {task.text}
          </div>
    </div>
    </div>
    {showDel ? <button className='x'><svg onClick={() => delTask(task.id)}  className={`x ${task.completed ? 'crossed' : ''} ` } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg></button>: ''}
    </ol>
  )
}


export default Task
