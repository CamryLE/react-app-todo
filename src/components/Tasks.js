import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onToggle, onCheck, delTask}) => {

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onCheck={onCheck} delTask={delTask}/>
      ))}
      
    </>
  )
}

export default Tasks
