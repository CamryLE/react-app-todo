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

import { library } from '@fortawesome/fontawesome-svg-core'


import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const App = () => {
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
  
  //On Submit
  const onSubmit = (e) => {
    console.log('deez')
    e.preventDefault(e)
    if(!e) {
      alert('Please add a task')
      return
    }
  } 

  //Count Items Left
  
  
   const length = tasks.length
  

  console.log(tasks.length)
return (
<body >
  <div className='container'>
    <Header onChange={() => console.log('deez')}/>
    <Input onAdd={onSubmit}></Input>
  {tasks.length > 0 ? <Tasks delTask={deleteTask} onCheck={crossTask} tasks={tasks}/>: <div className='alert'>Add a Task!</div>}
 <Footer itemsLeft={length}/>
    
  </div>    
</body>
  )
}



export default App;
