import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-gray-800 text-4xl font-bold tracking-widest'
          >
            Home
          </NavLink>
          <NavLink
            to='/todo'
            activeClassName='text-red-100 bg-red-700'
            className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800'
          >
            Week planner
          </NavLink>
          <NavLink
            to='/books'
            activeClassName='text-red-100 bg-red-700'
            className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800'
          >
            Lesmateriaal
          </NavLink>
          <NavLink
            to='/proof'
            activeClassName='text-red-100 bg-red-700'
            className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800'
          >
            Bewijs
          </NavLink>
          <NavLink
            to='/results'
            activeClassName='text-red-100 bg-red-700'
            className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800'
          >
            Resultaten
          </NavLink>
          <NavLink
            to='/singleresult'
            activeClassName='text-red-100 bg-red-700'
            className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800'
          >
            Leerroute
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
