import React from 'react'

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ])
    setInputText('')
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type='text'
        className='shadow-lg m-2 p-4'
        placeholder=' Taak '
      />
      <button onClick={submitTodoHandler} type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select '>
        <select
          onChange={statusHandler}
          name='todos'
          className='shadow-lg m-2 p-4'
        >
          <option value='all'>Alles</option>
          <option value='completed'>Klaar</option>
          <option value='uncompleted'>Nog te doen</option>
        </select>
      </div>
    </form>
  )
}

export default Form
