import TodoReducer from './TodoItemsReducer';
import { createContext } from "react";


import { useReducer } from 'react';

const TodoItemsContext = createContext()
export default TodoItemsContext;
 
export const TodoItemProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(TodoReducer,[])

  const addTodoItems = (id,todoText, todoDate) => {

    // if (todoText.trim() === '' || todoDate.trim() === '') {
    //   alert("please add todo")
    //   return;
    // }
    dispatch({
      type:'ADD_ITEMS',
      payload:{
        id,todoText,todoDate
      }
    })
  }
  const deleteItems = (todoid) => {
    dispatch({
      type:'DELETE_ITEMS',
      payload:{
        todoid
      }
    })
  }

  const addAllItems=(todoItems)=>{
    dispatch({
      type:"LOAD_ALL_ITEMS",
      payload:{
        allItems: todoItems
      }
    })
  }
  const funVal = {
    deleteItems, addTodoItems, todoItems,addAllItems
  }
  return <TodoItemsContext.Provider value={funVal}>
    {children}
  </TodoItemsContext.Provider>
}