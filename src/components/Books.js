import React from 'react'
import { NavLink } from 'react-router-dom'
import image1 from '../img/gBook.jpg'
import image2 from '../img/bBook.jpg'
import image3 from '../img/pBook.jpg'
import image4 from '../img/oBook.jpg'
import image5 from '../img/yBook.jpg'
export default function Books() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
      <NavLink to='/books/Gr'>
        <div className='min-w-min rounded overflow-hidden shadow-lg mx-5 my-5 px-5 py-5'>
          <img className='mx-auto' src={image1} alt='green book' />
          <div className='px-4 py-4'>
            <div className='font-bold text-xl mb-2 text-center'>Groen</div>
          </div>
        </div>
      </NavLink>

      <NavLink to='/books/wi'>
        <div className='min-w-min rounded overflow-hidden shadow-lg mx-5 my-5 px-5 py-5'>
          <img className='mx-auto' src={image2} alt='green book' />
          <div className='px-4 py-4'>
            <div className='font-bold text-xl mb-2 text-center'>Rekenen</div>
          </div>
        </div>
      </NavLink>

      <NavLink to='/books/nl'>
        <div className='min-w-min rounded overflow-hidden shadow-lg mx-5 my-5 px-5 py-5'>
          <img className='mx-auto' src={image3} alt='green book' />
          <div className='px-4 py-4'>
            <div className='font-bold text-xl mb-2 text-center'>Nederlands</div>
          </div>
        </div>
      </NavLink>

      <NavLink to='/books/bu'>
        <div className='min-w-min rounded overflow-hidden shadow-lg mx-5 my-5 px-5 py-5'>
          <img className='mx-auto' src={image4} alt='green book' />
          <div className='px-4 py-4'>
            <div className='font-bold text-xl mb-2 text-center'>
              Burgerschap
            </div>
          </div>
        </div>
      </NavLink>

      <NavLink to='/books/ic'>
        <div className='min-w-min rounded overflow-hidden shadow-lg mx-5 my-5 px-5 py-5'>
          <img className='mx-auto' src={image5} alt='purple book' />
          <div className='px-4 py-4'>
            <div className='font-bold text-xl mb-2 text-center'>ICT</div>
          </div>
        </div>
      </NavLink>
    </div>
  )
  //nav opties Nederlandse  Rekenen  Groen Burgerschap  ICT"
}
