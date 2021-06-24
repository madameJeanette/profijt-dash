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
  const [selectedImg, setSelectedImg] = useState(null)

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPark(null)
        setSelectedImg(null)
      }
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  function loopDoc(selectedImg) {
    if (selectedImg) {
      for (let i = 0; i < selectedImg.length; i++) {
        i++
        console.log(i)
        return (
          <div>
            <h2>Vak: {selectedImg[i].book}</h2>
            <img
              className='smileyIcon'
              src={selectedImg[i].file}
              alt='uploaded pic'
            />
            <h3>Opdracht: {selectedImg[i].name}</h3>
            <h3>Moeilijkheid: {selectedImg[i].difficulty}</h3>
          </div>
        )
      }
    }
    return
  }
  // loopDoc(selectedImg)
  return (
    <div>
      <h1 className='flex items-center pl-2 text-2xl'>
        Vak: {data[0].subject}{' '}
      </h1>
      <h1 className='flex items-center pl-2 text-2xl'>
        Gemmiddelde: {data[0].grade}{' '}
      </h1>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/mapbox/satellite-v9'
        onViewportChange={(viewport) => {
          setViewPort(viewport)
        }}
      >
        {parkDate.features.map((park) =>
          docs.map((doc) => (
            <Marker
              key1={park.properties.PARK_ID}
              name={doc.name}
              latitude={park.geometry.coordinates[0]}
              longitude={park.geometry.coordinates[1]}
            >
              <button
                className='bg-transparent'
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedPark(park)
                  setSelectedImg(docs)
                }}
              >
                <img src={boxDone} alt='point' className='buttonIcon' />
              </button>
            </Marker>
          ))
        )}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[0]}
            longitude={selectedPark.geometry.coordinates[1]}
            name={selectedImg[0].name}
            onClose={() => {
              setSelectedPark(null)
              setSelectedImg(null)
            }}
          >
            {/* <div>
              <img
                src={selectedPark.properties.PICTURE_LINK}
                alt='box'
                className='smileyIcon'
              />
              <h2>{selectedPark.properties.NAME}</h2>
            </div> */}

            {loopDoc(selectedImg)}
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  )
}

{
  /* <div className='img-grid'>
{docs &&
  docs.map((doc) => (
    <div className='img-wrap' key={doc.name}>
      <img src={doc.file} alt='uploaded pic' />
    </div>
  ))}
</div> */
}
