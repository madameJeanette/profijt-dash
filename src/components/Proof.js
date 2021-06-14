
import React, { useEffect } from 'react'
import {fb} from "../base"
import {formSchema} from "../Validations/FormValidation";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const db = fb.firestore();

export default function Proof() {
  const { register, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [fileUrl, setFileUrl] = React.useState(null)
  const [proof, setProof] = React.useState([]);

const onFileChange = async (e) => {
  const file = e.target.files[0]
  const storageRef = fb.storage().ref()
  const fileRef = storageRef.child(file.name)
  await fileRef.put(file)
  setFileUrl (await fileRef.getDownloadURL())  //download de afbeelding en haal de url op uit de db
}

const onSubmit = async (e) => {
 e.preventDefault()
 const formData = {
   file:e.target[0].value,
   book:e.target[1].value,
   difficulty: e.target[2].value
  }

 console.log(formData)
  const isValid = await formSchema.isValid(formData);
  console.log(isValid)

 const book = e.target.book.value
 const difficulty = e.target.difficulty.value
 console.log(book)
 console.log(difficulty)

 if (!book || !fileUrl || !difficulty ||!isValid) {
 alert('Niet alle velden zijn ingevuld!')
  return;
}
   db.collection("proof").doc(book).set({
     book: book,
     file: fileUrl,
     difficulty: difficulty,

   })
  alert('Bewijs verzonden!')
}

useEffect(() => {
  const fetchProof = async () => {
    const proofCollection = await db.collection("proof").get();
    setProof(
      proofCollection.docs.map((doc) => {
        return doc.data();
      })
    );
  };
  fetchProof();
}, []);


  return ( 
   <>
   <form onSubmit={onSubmit}>
   <input type="file"  onChange={onFileChange}/>
   {errors.file && <h3>Geen bestand gekozen</h3>}
   <p>Vul een vak in:</p>
    <select name="book" {...register('book')}>
      <option value="-">-</option>
      <option value="Groen">Groen</option>
      <option value="Logistiek">Logistiek</option>
      <option value="ICT">ICT</option>
      <option value="Nederlands">Nederlands</option>
      <option value="Rekenen">Rekenen</option>
    </select> 
    {errors.book &&<h3>Geen vak ingevuld.</h3>}
    <p>Wat vond je van de opdracht?</p>
    <select name="difficulty" {...register('difficulty')}>
      <option value="-">-</option>
      <option value="Makkelijk">Makkelijk</option>
      <option value="Normaal">Normaal</option>
      <option value="Moeilijk">Moeilijk</option>
    </select> 
   {errors.difficulty &&<h3>Vul in wat je van de opdracht vond.</h3>}

     <button>Verzend</button>
    </form> 
    <ul>
    {proof.map((item) => {
          return (
            <li key={item.book}>
              <img width="100" height="100" src={item.file} alt={item.book} />
              <p>{item.book}</p>
              <p>{item.difficulty}</p>
            </li>
          );
        })}
    </ul>
    </>
  ) 

  }