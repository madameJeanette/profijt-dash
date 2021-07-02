import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar({ toggle, isOpen }) {
  return (
    <header className='bg-red-600 p-4 '>
      <div
        className={isOpen ? 'hidden' : 'px-4 cursor-pointer'}
        onClick={toggle}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className={isOpen ? ' px-4 cursor-pointer ' : 'hidden'}>
        <nav className='flex flex-col md:flex-row'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='sm: text-xl md: inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-gray-800 text-4xl font-bold tracking-widest'
            onClick={toggle}
          >
            Home
          </NavLink>
          <NavLink
            to='/todo'
            activeClassName='text-red-100 bg-red-700 '
            className='md:inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800'
          >
            Weekplanner
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
