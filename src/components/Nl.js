import React from 'react'
import image1 from '../img/pBook.jpg'

export default function Nl() {

  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
      <img className="mx-auto" src={image1} alt="blue book"/>
        <h1 className="text-5xl flex justify-center">Nederlands</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welkom op de lesmateriaal pagina van Nederlands</h2>
      </section>
    </main>
  )
}

