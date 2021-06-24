import React from 'react'

function Form() {
  return (
    <div>
      <form>
        <input type='text' class='todo-input' />
        <button type='submit'>
          <i class='fas fa-plus-square'></i>
        </button>
        <div class='select'>
          <select name='todos' class='filter-todo'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form
