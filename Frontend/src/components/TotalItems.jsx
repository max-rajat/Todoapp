import { useContext } from "react"
import TodoItems from "./TodoItems"
import TodoItemsContext from "../store/TodoItemContext"
const TotalItems = () => {
 const {todoItems}=useContext(TodoItemsContext)
    return (
        <>
            {
                todoItems.map(items => <TodoItems key={items.id} id={items.id} todoText={items.todoText} todoDate={items.todoDate}/>)
            }

        </>
    )
}
export default TotalItems