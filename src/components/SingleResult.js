import React, { useState, useEffect, useMemo } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as parkDate from '../data/Skateboard_Parks.json'
import box from '../img/boxItem.png'
import boxDone from '../img/boxItem_disabled.png'
import MOCK_DATA from '../data/MOCK_DATA.json'
import useFirestore from '../hooks/useFirestore'

export default function SingleResult() {
  const data = useMemo(() => MOCK_DATA, [])
  const { docs } = useFirestore('proof')
  const REACT_APP_MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoicGFwcmlrYXQiLCJhIjoiY2txOWIwMHNtMDB6cDJ2b3Y3anp1NmRqaCJ9.0W-fEr68NxS3etVAcTPB5g'
  const [viewport, setViewPort] = useState({
    latitude: 51.904741,
    longitude: 4.467184,
    width: '100vw',
    height: '50vh',
    zoom: 10,
  })
  const [selectedPark, setSelectedPark] = useState(null)

  let matchingDoc = null
  let flip = null

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPark(null)
      }
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  function matching() {
    if (selectedPark) {
      if (selectedPark.properties.PARK_ID < docs.length) {
        matchingDoc = docs.find(
          (doc) => doc.name === selectedPark.properties.DESCRIPTION
        )
        console.log(selectedPark)
        console.log(matchingDoc)
      }
    }
  }
  matching()
  function buttonFlip(park) {
    flip = docs.find((doc) => doc.name === park.properties.DESCRIPTION)
  }

  return (
    <div>
      <div className=' pl-2 text-2xl'>
        <h1 className='text-center p-4 m-4 text-2xl'>
          {data[0].subject} | {data[0].grade}⭐ | {data[0].level}{' '}
        </h1>
      </div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/mapbox/satellite-v9'
        onViewportChange={(viewport) => {
          setViewPort(viewport)
        }}
      >
        {parkDate.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[0]}
            longitude={park.geometry.coordinates[1]}
          >
            <button
              className='bg-transparent'
              onClick={(e) => {
                e.preventDefault()
                setSelectedPark(park)
              }}
            >
              {' '}
              {buttonFlip(park)}
              {flip !== undefined ? (
                <img src={boxDone} alt='point' className='buttonIcon' />
              ) : (
                <img src={box} alt='point' className='buttonIcon' />
              )}
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[0]}
            longitude={selectedPark.geometry.coordinates[1]}
            onClose={() => {
              setSelectedPark(null)
            }}
          >
            {matchingDoc !== null && matchingDoc !== undefined ? (
              <div>
                <p>
                  ✔️ <strong>Leerdoel</strong>: {selectedPark.properties.NAME}
                </p>

                <img
                  className='smileyIcon'
                  src={matchingDoc.file}
                  alt='uploaded pic'
                />
                <h2>
                  <strong>Opdracht:</strong> {matchingDoc.name}{' '}
                </h2>
                <h3>{matchingDoc.difficulty}</h3>
              </div>
            ) : (
              <div>
                <p>
                  <strong>Leerdoel</strong>: {selectedPark.properties.NAME}
                </p>
                <img
                  src={selectedPark.properties.PICTURE_LINK}
                  alt='asignment picture'
                  className='smileyIcon'
                />
              </div>
            )}
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  )
}
