import { useState } from 'react'
// import {FontawesomeIcon} from '../package.json@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const Input = ({onAdd}) => {
  const [text, setText]= useState('')
 
  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({text})
    setText('')
  }

    
 // console.log(text)

  return (
    <div className='task' >
      <form className='add-form' onSubmit={onSubmit} >
        <button className='plus' type='submit'>
          +
        </button>
        
        <input required className='todo-name' type='text' maxLength={25} value={text} onChange={(e) => setText(e.target.value)} placeholder='Create a new todo...'></input>
      </form>
    </div>
   
  )
}

export default Input
