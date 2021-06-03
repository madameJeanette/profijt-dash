import React from 'react'
import image from "../bgImg.jpg"
export default function Home() {
  return (
  <main>
    <img src={image} alt="colorfull mountains" className="absolute object-cover w-full h-full"/>
    <section className="relative flex justify-left min-h-screen  pt-12 lg:pt-164 px-8">
      <h1 className="text-4xl text-gray-800 font-bold leading-none lg:leading-snug ">Welkom terug!</h1>
    </section>
  </main>
    )
}
