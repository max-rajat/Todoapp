import { useContext } from "react"
import { Button } from "./Button"
import TodoItemsContext from "../store/TodoItemContext"
const TodoItems = ({ id, todoText, todoDate }) => {
const {deleteItems}=useContext(TodoItemsContext)
const deleteHandler=()=>{
  fetch(`http://localhost:3000/todos/${id}`,{
    method:'DELETE'
  }).then(res=>res.json())
  deleteItems(id)
}
  return (
    <>
      <div className="container">
        <div className="row myrow">
          <div className="col-5 text-truncate" >
            {todoText}
          </div>
          <div className="col-3">
            {todoDate}
          </div>
          <div className="col-2">
            <Button btnType='danger' btnText='Delete' handler={deleteHandler} />
          </div>
        </div>
      </div>

    </>
  )
}
export default TodoItems