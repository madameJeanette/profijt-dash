import React, {useEffect, useState} from "react";
import sanityClient from "../client.js"

export default function Projects() {
  const [projectData, setProjectData ] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      place,
    
      description,
      projectType,
      link,
      tags,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
    )
    .then((data) => setProjectData(data))
    .catch(console.error)
  }, [])

  return(
  <main className="bg-white min-h-screen p-12">
    <section className="container mx-auto">
      <h1 className="text-5xl flex justify-center">Portfolio</h1>
      <h2 className="text-lg text-gray-600 flex justify-center mb-12">
        Welkom op je portfolio pagina!
      </h2>
      <section className="grid grid-cols-2 gap-8">
        {projectData && projectData.map((project, index)=> (
         <article>
         <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index} >
           <img 
             src={project.mainImage.asset.url}
             alt={project.mainImage.alt}
             className="w-full h-full rounded-r object-cover absolute"
           />
          
           <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
             <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
               {project.title}
             </h3>
           </span>
 
          <div className="text-gray-500 text-xs space-x-4">
            <span>
              <strong className="font-bold">Ingeleverd op</strong>: {""}
              {new Date(project.date).toLocaleDateString()}
            </span>
            <span>
             <strong className="font-bold">Plaats</strong>: {""}
              {project.place}
            </span>
            <span>
              <strong className="font-bold">Type</strong>: {""}
              {project.projectType}
            </span>
            <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}
            </p>
            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400">
            {" "}
            <span role="img" aria-label="right pointer"> klik voor meer </span>
            </a>
            
          </div>
          </span>
        </article>
        ))}
      </section>
    </section>
  </main>
  )
}