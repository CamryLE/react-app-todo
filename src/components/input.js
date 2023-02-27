import { useState } from 'react'


const Input = ({onAdd, lengths}) => {
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
