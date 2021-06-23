import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as parkDate from '../data/Skateboard_Parks.json'
import smiley1 from '../img/happy.svg'
import box from '../img/boxItem.png'
import boxDone from '../img/boxItem_disabled.png'

export default function SingleResult() {
  const REACT_APP_MAPBOX_ACCES_TOKEN =
    'pk.eyJ1IjoicGFwcmlrYXQiLCJhIjoiY2txOWIwMHNtMDB6cDJ2b3Y3anp1NmRqaCJ9.0W-fEr68NxS3etVAcTPB5g'
  const [viewport, setViewPort] = useState({
    latitude: 51.904741,
    longitude: 4.467184,
    width: '100vw',
    height: '50vh',
    zoom: 10,
  })
  const [selectedPark, setSelectedPark] = useState(null)

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

  return (
    <div>
      <h1>Vak: xxx</h1>
      <h1>Gemmiddelde: xxxx</h1>
      <h1>Moeilijkheid: xxxx</h1>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCES_TOKEN}
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
              <img src={box} alt='point' className='buttonIcon' />
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
            <div className='items-center'>
              <img
                src={selectedPark.properties.PICTURE_LINK}
                alt='box'
                className='smileyIcon'
              />
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  )
}
