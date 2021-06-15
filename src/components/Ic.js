import React, { useState, useEffect } from 'react'
import image1 from '../img/yBook.jpg'

export default function Ic() {
 
  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
      <img className="mx-auto" src={image1} alt="purple book"/>
        <h1 className="text-5xl flex justify-center">ICT</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welkom op de lesmateriaal pagina van ICT</h2>
      </section>
    </main>
  )
}

