import { useContext, useEffect,useState } from "react"
import TodoItemsContext from "../store/TodoItemContext"
import todoItemsToClientModel from "../utils/ModelUtil"

function LoadItems() {
    const { todoItems, addAllItems } = useContext(TodoItemsContext)
    const[isLoading,setIsLoading]=useState(false)


    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(items => {
                const newItems = items.map(todoItemsToClientModel)
                  
                addAllItems(newItems)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }, [])

    return (
        <>
           {isLoading &&  <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}

            {!isLoading && todoItems.length===0 && <p>No Todos</p>}
        </>
    )

}

export default LoadItems