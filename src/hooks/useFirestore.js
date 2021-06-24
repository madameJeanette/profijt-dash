import { useState, useEffect } from 'react'
import { projectFirestore } from '../base'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('book', 'desc')
      .onSnapshot((snap) => {
        let documents = []
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id })
        })
        setDocs(documents)
      })

    return () => unsub()
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection])

  return { docs }
}

export default useFirestore
