import React from 'react'
import Task from './Task'

const TasksCompleted = ({tasks, onToggle, onCheck, delTask}) => {

  return (
    <>
      {tasks.filter(task => task.completed === true).map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onCheck={onCheck} delTask={delTask}/>
      ))}
      
    </>
  )
}

export default TasksCompleted
