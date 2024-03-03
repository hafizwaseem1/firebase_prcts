import React from 'react'

const TodoStack = ({todo, deltodo, id , editTodo, UpdateTodo, editDocument, setEditDocument, isUpdating}) => {
    
  return (
    <div>
      <div className='stack'>
        {todo}
        <button onClick={deltodo}>Delete</button>
        <button onClick={editTodo}>Edit</button>
      </div>
      {
        isUpdating? <div>
        <input type="text" value={editDocument} required onChange={(e)=> setEditDocument(e.target.value)} />
        <button onClick={UpdateTodo}>Update Todo</button>
      </div>: ''
      } 
    </div>
  )
}

export default TodoStack
