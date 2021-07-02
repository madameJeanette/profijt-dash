import React, { useEffect } from 'react'
import { fb } from '../base'
import { formSchema } from '../Validations/FormValidation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as parkDate from '../data/Skateboard_Parks.json'
import * as yup from 'yup'

const db = fb.firestore()

export default function Proof() {
  let park = []

  for (let i = 0; i < parkDate.features.length; i++) {
    park.push(parkDate.features[i].properties.NAME)
  }
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const [fileUrl, setFileUrl] = React.useState(null)
  const [proof, setProof] = React.useState([])

  const onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = fb.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL()) //download de afbeelding en haal de url op uit de db
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      name: e.target[0].name.value,
      goal: e.target[1].value,
      file: e.target[2].value,
      book: e.target[3].value,
      difficulty: e.target[4].value,
    }

    console.log(formData)
    const isValid = await formSchema.isValid(formData)
    console.log(isValid)

    const book = e.target.book.value
    const difficulty = e.target.difficulty.value
    const name = e.target.name.value
    const goal = e.target.goal.value

    if (!book || !fileUrl || !difficulty || !goal) {
      alert('Niet alle velden zijn ingevuld!')
      return
    }

    if (!isValid) {
      alert('Bestand is te groot')
      return
    }
    db.collection('proof').doc().set({
      goal: goal,
      name: name,
      book: book,
      file: fileUrl,
      difficulty: difficulty,
    })
    alert('Bewijs verzonden!')
  }

  useEffect(() => {
    const fetchProof = async () => {
      const proofCollection = await db.collection('proof').get()
      setProof(
        proofCollection.docs.map((doc) => {
          return doc.data()
        })
      )
    }
    fetchProof()
  }, [])

  return (
    <div className='min-h-screen p-12'>
      <form onSubmit={onSubmit}>
        <input className='m-2' type='file' onChange={onFileChange} />
        <p>Naam opdracht: </p>
        <input className='shadow-lg' name='name' type='name' />
        <p>Kies het leerdoel:</p>

        <select className='shadow-lg' name='goal'>
          {park.map((par) => (
            <option>{par}</option>
          ))}
        </select>

        <p>Kies het vak: </p>
        <select className='shadow-lg' name='book'>
          <option value='-'>-</option>
          <option value='Groen'>Groen</option>
          <option value='Logistiek'>Logistiek</option>
          <option value='ICT'>ICT</option>
          <option value='Nederlands'>Nederlands</option>
          <option value='Rekenen'>Rekenen</option>
        </select>

        <p>Wat vond je van de opdracht?</p>
        <select className='shadow-lg' name='difficulty'>
          <option value='-'>-</option>
          <option value='😃 makkelijk'>😃 Makkelijk </option>
          <option value='😐 normaal'>😐 Normaal</option>
          <option value='☹️ moeilijk'>☹️ Moeilijk</option>
        </select>

        <button className='m-2 button'>Verzend</button>
      </form>
    </div>
  )
}
