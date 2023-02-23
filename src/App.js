import style1 from './App.css';
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
  let dark 
  const [theme, setTheme] = useState('dark');
  const darkMode = () => {
    if (theme === 'light') 
    {
      dark = true
      setTheme('dark');
    } 
    else{ 
      dark = false
      setTheme('light');
  }
  }
  useEffect(() => {
    document.body.className = `bod${theme}`;
    }, [theme]);



// Drag and Drop
const dragList = () => {
  let items = document.getElementsByTagName("ol"), current='none'
    for (let i of items) {
    // (B1) ATTACH DRAGGABLE
    i.draggable = true;
    
    i.ondragstart = e => {
        current= i;
        if (it !== current) { it.classlist.add('hint'); }
    }
    i.ondragenter = e => {
      if (i !== current) { i.classList.add("active"); }
    };
    i.ondragleave = () => i.classList.remove("active");
    i.ondragend = () => { for (let it of items) {
      it.classList.remove("hint");
      it.classList.remove("active");
  }};

  
    // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    i.ondragover = e => e.preventDefault();

      // (B7) ON DROP - DO SOMETHING
      i.ondrop = e => {
        e.preventDefault();
        if (i !== current) {
          let currentpos = 0, droppedpos = 0;
          for (let it=0; it<items.length; it++) {
            if (current === items[it]) { currentpos = it; }
            if (i === items[it]) { droppedpos = it; }
          }
          if (currentpos < droppedpos) {
            i.parentNode.insertBefore(current, i.nextSibling);
          } else {
            i.parentNode.insertBefore(current, i);
          }
        }
      };
    
  }
  
}
dragList()



// Change State
let state
const changeActive= () => {
  state = 'active'
  setStates()
}

const changeCompleted= () => {
  state = 'completed'
  setStates()
}
const changeAll= () => {
  state = 'all'
  setStates()
}

function setStates() {
  const taskState = document.querySelectorAll('ol')
  // console.log(state)
  // console.log(taskState)
  taskState.forEach(task => {
    if (state === 'active') {
      if (task.classList.contains('crossed')){
        task.classList.add('hidden')
      } else {
        task.classList.remove('hidden')
      }
    } else if (state === 'all') {
      if (task.classList.contains('hidden')) {
        task.classList.remove('hidden')
      } else {
        task.classList.remove('hidden')
      }
    } else if (state === 'completed') {
      if (!task.classList.contains('crossed')) {
        task.classList.add('hidden')
      } else {
        task.classList.remove('hidden')
      }
    }
  });
}
  // taskState.forEach(task => {
  //   if (state === 'active') {
  //     if (task.classList.contains('crossed')) {
  //     task.classList.add('hidden')
  //     }
  //   }
  // }
    
//     else if(state === 'all') {
//         if (task.classList.contains('hidden')){ 
//         task.classList.remove('hidden')
//         } 
//     else if (state === 'completed') {
//         if (!task.classList.contains('crossed')) {
//         task.classList.add('hidden')
//         }
//   }
// }
//}


//Cross Task
  const crossTask = (id) => {
    console.log(id)
    setTasks(tasks.map((task)=> task.id === id ? {...task, completed: !task.completed} : task))
  }

  //Clear Tasks

  const clearTasks = () => {
    setTasks([])
  }
  
  //Delete task
  const deleteTask = (id) => {
    // console.log(id)
    setTasks(tasks.filter((task)=> task.id !== id))
    
  }

 


// Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  
  //Count Items Left
let lengths

const global = () => {
lengths = tasks.filter((task)=> task.completed === false).length
dragList ()
}
document.addEventListener('DOMContentLoaded', global())
 
return (
  
  
    <div className= {theme}>
      <div className='container'>
        <Header onChange={darkMode} darkMode={dark}/>
        <Input onAdd={addTask}></Input>
        
      {tasks.length > 0 ?

      <ul class='task-container' id='task-container'>
      
      <Tasks delTask={deleteTask} 
      tasks={tasks} crossTask={crossTask} 
      // activeState={activeState} completedState={completedState} allState={allState} state={state}
      />
    
      </ul>
      : 
    //else
      <div className='alert'>Add a Task!</div>}
    
    
    <Footer itemsLeft={lengths} clear={clearTasks} setActive={changeActive} setCompleted={changeCompleted} setAll={changeAll}
    />
        
      </div>    
    </div>
  
  )
}



export default App;
