import React from 'react'
import { NavLink } from 'react-router-dom'
import image1 from '../img/gBook.jpg'
import image2 from '../img/bBook.jpg'
import image3 from '../img/pBook.jpg'
import image4 from '../img/oBook.jpg'
import image5 from '../img/yBook.jpg'
export default function Books() {
  return (
    
  <div class="grid grid-cols-3 gap-4">
    <NavLink to="/books/Gr">    

      <div class="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2">
       <img class="mx-auto" src={image1} alt="green book"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Groen</div>

        </div>
        <div class="px-6 py-4">
        </div>
      </div>
    </NavLink>

  
    <NavLink to="/books/wi">    

      <div class="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2">
       <img class="mx-auto" src={image2} alt="green book"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Rekenen</div>

        </div>
        <div class="px-6 py-4">
        </div>
      </div>
    </NavLink>

    <NavLink to="/books/nl">    

      <div class="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2">
       <img class="mx-auto" src={image3} alt="green book"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Nederlands</div>

        </div>
        <div class="px-6 py-4">
        </div>
      </div>
    </NavLink>

    <NavLink to="/books/brgr">    

      <div class="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2">
       <img class="mx-auto" src={image4} alt="green book"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Burgerschap</div>

        </div>
        <div class="px-6 py-4">
        </div>
      </div>
    </NavLink>

    <NavLink to="/books/ict">    

      <div class="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2">
       <img class="mx-auto" src={image5} alt="puple book"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">ICT</div>

        </div>
        <div class="px-6 py-4">
        </div>
      </div>
    </NavLink>

  </div>
  )
  //nav opties Nederlandse  Rekenen  Groen Burgerschap  ICT"
}