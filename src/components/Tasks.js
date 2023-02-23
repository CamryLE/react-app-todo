import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onToggle, crossTask, delTask, handleOnDrag}) => {


  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} handleOnDrag={handleOnDrag} delTask={delTask} crossTask={crossTask}/>
      ))}
      
    </>
  )
}

export default Tasks
