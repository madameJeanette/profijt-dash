import React, { useEffect } from 'react'
import {fb} from "../base"
import sad from "../img/sadFace.png"
import meh from "../img/mehFace.png"
import happy from "../img/happyFace.png"
import { useForm } from 'react-hook-form'

const db = fb.firestore();

export default function Proof() {
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

 const book = e.target.book.value
 const difficulty = e.target.difficulty.value
 console.log(book)
 console.log(difficulty)

 if (!book || !fileUrl || !difficulty) {
  return;
}
   db.collection("proof").doc(book).set({
     book: book,
     file: fileUrl,
     difficulty: difficulty,

   })
}

//const { register, handleSubmit, formState: { errors }} = useForm();
// {...register('difficulty', { required: true, minLength:3 })}
// {...register('difficulty', { required: true, minLength:3 })}

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
   <input type="file" onChange={onFileChange}/>
   <p>Vul een vak in:</p>
    <select name="book">
      <option value="-">-</option>
      <option value="Groen">Groen</option>
      <option value="Logistiek">Logistiek</option>
      <option value="ICT">ICT</option>
      <option value="Nederlands">Nederlands</option>
      <option value="Rekenen">Rekenen</option>
    </select> 

    <p>Wat vond je van de opdracht?</p>
    <select name="difficulty">
      <option value="-">-</option>
      <option value="Makkelijk">Makkelijk</option>
      <option value="Normaal">Normaal</option>
      <option value="Moeilijk">Moeilijk</option>
    </select> 


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

    // <form onSubmit={handleSubmit(onSubmit)} > 

    //   <input name="file" type="file"  {...register('file', { required: true })}/>

    //    <select {...register('difficulty', { required: true, minLength:3 })}>

    //   {errors.book &&<h3>Vul een vak in.</h3>}
    //   {errors.file && <h3>Kies een bestand</h3>}
    //   {errors.difficulty &&<h3>Vul in wat je van de opdracht vond.</h3>}
    //   <input type="submit" />
  // )
  //   </form>
    
//)
  }