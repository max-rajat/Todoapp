import { v4 as uuidv4 } from 'uuid'
const id = uuidv4()
const TodoReducer = (currentItems, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            const id = action.payload.id
            const todoText = action.payload.todoText;
            const todoDate = action.payload.todoDate
            return [...currentItems, { id, todoText, todoDate }]

        case 'DELETE_ITEMS':
            const todoid = action.payload.todoid
            return currentItems.filter(item => item.id !== todoid)
        case 'LOAD_ALL_ITEMS':
            return action.payload.allItems
            
    }
}
export default TodoReducer