import React, { useRef } from 'react'

import './NewTodo.css'

interface NewTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    onAddTodo(enteredText)
    textInputRef.current!.value = ''
  }
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor='todo-text'>Todo Text</label>
        <input
          placeholder=' ... goes here'
          type='text'
          id='todo-text'
          ref={textInputRef}
        />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  )
}

export default NewTodo
