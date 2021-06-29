import React from 'react'
import image from '../bgImg.jpg'
import { NavLink } from 'react-router-dom'
import image1 from '../img/proof.png'
import image2 from '../img/result.png'
import image3 from '../img/route.png'
import image4 from '../img/book.png'
import image5 from '../img/plan.png'

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='colorfull mountains'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-left min-h-screen  pt-12 lg:pt-164 px-8'>
        <h1 className='text-4xl text-gray-800 font-bold leading-none lg:leading-snug '>
          Welkom terug!
        </h1>

        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-2 mx-10'>
          <NavLink to='/Todo'>
            <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2'>
              <div className='px-6 py-4'>
                <img className='mx-auto' src={image5} alt='plan' />
                <div className='font-bold text-xl mb-2 text-center'>
                  Weekplanner
                </div>
              </div>
              <div className='px-6 py-4'></div>
            </div>
          </NavLink>

          <NavLink to='/books'>
            <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2'>
              <div className='px-6 py-4'>
                <img className='mx-auto' src={image4} alt='orsnge book' />
                <div className='font-bold text-xl mb-2 text-center'>
                  Lesmateriaal
                </div>
              </div>
              <div className='px-6 py-4'></div>
            </div>
          </NavLink>

          <NavLink to='/proof'>
            <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2'>
              <div className='px-6 py-4'>
                <img className='mx-auto' src={image1} alt='proof' />
                <div className='font-bold text-xl mb-2 text-center'>
                  Bewijs inleveren
                </div>
              </div>
              <div className='px-6 py-4'></div>
            </div>
          </NavLink>

          <NavLink to='/results'>
            <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2'>
              <div className='px-6 py-4'>
                <img className='mx-auto' src={image2} alt='result' />
                <div className='font-bold text-xl mb-2 text-center'>
                  Resultaten
                </div>
              </div>
              <div className='px-6 py-4'></div>
            </div>
          </NavLink>

          <NavLink to='/singleResult'>
            <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2'>
              <div className='px-6 py-4'>
                <img className='mx-auto' src={image3} alt='route' />
                <div className='font-bold text-xl mb-2 text-center'>
                  Leerroute
                </div>
              </div>
              <div className='px-6 py-4'></div>
            </div>
          </NavLink>
        </div>
      </section>
    </main>
  )
}
