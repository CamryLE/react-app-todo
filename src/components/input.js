import React from 'react'
// import {FontawesomeIcon} from '../package.json@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const Input = (onAdd,) => {


    


  return (
    
    <div className='task' >
      <form className='add-form' onSubmit={onAdd} >
        <input className='plus' value={<FontAwesomeIcon icon="fa-solid fa-plus" />} type ='submit'></input>
        
        <input required type='text' placeholder='Create a new todo...'></input>
      </form>
    </div>
   
  )
}

export default Input
