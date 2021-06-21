import React from 'react'
import image from '../bgImg.jpg'
import { NavLink } from 'react-router-dom'

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

        <div className='grid grid-cols-4 gap-1 pt-12 lg:pt-164 px-8'>
          <NavLink to='/Todo'>
            <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2'>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2 text-center'>
                  Week doel
                </div>
              </div>
              <div className='px-6 py-4'></div>
            </div>
          </NavLink>

          <NavLink to='/books'>
            <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2'>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2 text-center'>
                  Les materiaal
                </div>
              </div>
              <div className='px-6 py-4'></div>
            </div>
          </NavLink>

          <NavLink to='/proof'>
            <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2'>
              <div className='px-6 py-4'>
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
                <div className='font-bold text-xl mb-2 text-center'>
                  Resultaten
                </div>
              </div>
              <div className='px-6 py-4'></div>
            </div>
          </NavLink>

          {/* <NavLink to="/projects">    

              <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">Portfolio</div>
                </div>
                <div className="px-6 py-4">
                </div>
              </div>
            </NavLink> */}
        </div>
      </section>
    </main>
  )
}
