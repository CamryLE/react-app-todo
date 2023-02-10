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
    
  }

    
  console.log(text)

  return (
    <div className='task' >
      <form className='add-form' onSubmit={onSubmit} >
        <input className='plus' value={<FontAwesomeIcon icon="fa-solid fa-plus" />} type='submit'></input>
        
        <input required type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Create a new todo...'></input>
      </form>
    </div>
   
  )
}

export default Input
