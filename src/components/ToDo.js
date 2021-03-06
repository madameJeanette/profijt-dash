import React, { useState, useEffect } from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default function ToDo() {
  //states
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  //Run once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, [])
  //use effect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
    <div className='min-h-screen p-12  grid justify-items-center'>
      <h1 className='text-4xl text-gray-800 font-bold leading-none lg:leading-snug m-2 p-2'>
        Mijn weekplan
      </h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  )
}
