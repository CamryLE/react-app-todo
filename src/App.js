// import logo from './logo.svg';
// import { useState } from 'react'
import style1 from './App.css';
import style2 from './Dark.css'
import Header from './components/Header'
import Input from './components/input';
import React from 'react'
import { useState } from 'react'
import Tasks from './components/Tasks'
import Footer from './components/Footer';
import { useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'


import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


const App = () => {
  
  const darks = document.querySelectorAll('.dark')
 

  let theme = 'dark'
  let [remaining, setRemaining] = useState('')
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: 'Complete Javascript Course',
      completed: true,
    },
    {
      id: 2,
      text: 'Hit the Griddy',
      completed: false,
    },
    {
      id: 3,
      text: 'Ligma Balls',
      completed: true,
    },
  ])
  
  //Dark Mode
  const darkMode = () => {
    console.log(darks)
    
    document.getElementById('header').classList.add('dark')
    document.body.classList.add('dark')
    document.getElementById('header').classList.add('dark')
    document.getElementById('header').classList.add('dark')
    document.getElementById('header').classList.add('dark')
    document.getElementById('')
  }


  //Cross Task

  const crossTask =  (task) => {
    // console.log(task)
     task.className ='crossed'
  }

  //Delete task
  const deleteTask = (id) => {
    // console.log(id)
    setTasks(tasks.filter((task)=> task.id !== id))
    
  }

  //Set active tasks
  let state = 'active'
  let activeState = [...tasks]
  let completedState = [...tasks]
  let allState = [...tasks]

  
  const chooseState = () => {
    if(state === 'all') {
      return (
        <Tasks delTask={deleteTask} onCheck={crossTask} tasks={tasks}/>
      )
    }
  }

  const setAll = (e,) => {
    let stateList = document.querySelectorAll('li.selected')
    let i 
    for (i = stateList.length - 1; i >= 0; i--){
      stateList.item(i).className = "";
    }
    e.target.className='selected'
    state = 'all'

  }
  const setActive = (e,) => {
    let stateList = document.querySelectorAll('li.selected')
    let i 
    for (i = stateList.length - 1; i >= 0; i--){
      stateList.item(i).className = "";
    }
    e.target.className='selected'
    let tasksActive = [...tasks]
    setTasks(tasksActive.filter((task)=> task.completed !== true))
    state = 'active'



  }
  const setCompleted = (e,) => {
    // console.log('deez')
    let stateList = document.querySelectorAll('li.selected')
    let i 
    for (i = stateList.length - 1; i >= 0; i--){
      stateList.item(i).className = "";
    }
    e.target.className='selected'
    let tasksCompleted = [...tasks]
    setTasks(tasksCompleted.filter((task)=> task.completed === true))
    state = 'completed'
  }
  
  // const showState = () => {
    
  //   return (
  //     <Tasks delTask={deleteTask} onCheck={crossTask} tasks={tasks}/>
  //   )
  // }
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  

  //Count Items Left
  
  
   const length = tasks.length
  

  console.log(tasks.length)
return (
<body className='dark'>
  <div className='container dark'>
    <Header onChange={darkMode}/>
    <Input onAdd={addTask}></Input>
  {tasks.length > 0 ?
  <Tasks delTask={deleteTask} onCheck={crossTask} 
   tasks={tasks} 
  // activeState={activeState} completedState={completedState} allState={allState} state={state}
  />
  : 
//else
  <div className='alert'>Add a Task!</div>}
 
 
 <Footer itemsLeft={length} 
 //setActive={setActive} setCompleted={setCompleted} setAll={setAll}
 />
    
  </div>    
</body>

  )
}



export default App;
