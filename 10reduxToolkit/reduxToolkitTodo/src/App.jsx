import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <h1 className='text-white text-4xl py-7'>Learn about redux toolkit</h1>
       <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl text-white text-center">Todo List</h1>
        <AddTodo />
        <Todos />
        </div>
    </div>
  )
}

export default App
