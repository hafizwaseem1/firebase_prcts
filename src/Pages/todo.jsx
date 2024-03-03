import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../Utils/firebase.config';
import TodoStack from '../Components/TodoStack';
const Todo = () => {
  const [Todo , setTodo]= useState('');
  const [data , setData] = useState([]);
  const [loading,setloading] = useState(false);
  const [editDocument, setEditDocument] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  //add function
  const addTodo = async() =>{
    try {
      const collectionReference = collection(db, 'todoapp')
      const data = {Todo:Todo}
      await addDoc(collectionReference, data)
      setTodo('')
      getTodo()
      alert('Successfully added')
    } catch (error) {
      console.log('its an error motherfucker',error)
    }
  } 
  // get function
  async function getTodo()  {
    try {
      setloading(true)
      const collectionReference = collection(db, 'todoapp' )
      const data1 = await getDocs(collectionReference )
      setData(data1.docs)
      setloading(false)
    } catch (error) {
      console.log('fuck OFF',error)
    }
  }
  //delete function
  const deltodo = async(id) =>{
    
    try {
      const collectionReference = collection(db, 'todoapp' )
      const documentReference = doc(collectionReference, id)
      await deleteDoc(documentReference)
       await getTodo()
    } catch (error) {
      console.log('you cant delete it motherfucker', error)
    }
  }
  //edit function
  const editTodo=async(id)=>{
    try {
      setIsUpdating(true)
      const collectionReference = collection(db, 'todoapp')
      const documentReference = doc(collectionReference , id )
      const document = await getDoc(documentReference)
      setEditDocument(document.data().Todo)
      


      

    } catch (error) {
      console.log('ok motherfucker', error)
    }
  }
  //update function
  const UpdateTodo = async(id) =>{
    setloading(true)
    const collectionReference = collection(db,'todoapp')
    const documentReference = doc(collectionReference, id)
    await updateDoc(documentReference, {Todo:editDocument})
    await getTodo()
    setIsUpdating(false)
    setloading(false)
  } 
  useEffect(()=>{
    getTodo()
  }, [])
  return (
    <div>
      <input type="text" required value={Todo} onChange={(e)=> setTodo(e.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      {
        loading?'loading....' :  
        data.map((todo, index)=>{
          return <TodoStack 
          todo={todo.data().Todo }
          key={index}
          delTodo={()=>deltodo(todo.id)}
          editTodo={()=>editTodo(todo.id)}
          UpdateTodo={()=>UpdateTodo(todo.id)}
          editDocument={editDocument}
          setEditDocument={setEditDocument}
          isUpdating={isUpdating}
          id={todo.id}
          />
        }
        )
      }

      
    </div>
  )
}

export default Todo
