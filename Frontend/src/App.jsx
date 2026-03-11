
import Heading from './components/Heading'
import AddTodo from './components/AddTodo'
import TotalItems from './components/TotalItems'
import { TodoItemProvider } from './store/TodoItemContext'
import LoadItems from './components/LoadItems'
function App() {


  return (
    <>
      <center>
        <Heading />
        <TodoItemProvider>
          <AddTodo/>
          <LoadItems/>
          <TotalItems/>
        </TodoItemProvider>

      </center>

    </>
  )
}

export default App
