import React from 'react'
import {fb} from "../base"
import sad from "../img/sadFace.png"
import meh from "../img/mehFace.png"
import happy from "../img/happyFace.png"
import { useForm } from 'react-hook-form'

export default function Proof() {
  //const onChange = (e) => {  
  //   const file = e.target.files[0]   //get file reference to file 
  //                                     //if you have more then one you need to loop trough them
  //   const storageRef = fb.storage().ref()  //define storage refference
  //   const fileRef = storageRef.child(file.name) //create new file
  //   fileRef.put(file).then(()=> {     //put in the data
  //     console.log("uploaded a file")   // if succes log message
  //   })
  // }
  // <h1>Lever hier je bewijs in!</h1>
  // return (
  //   <input type="file" onChange={onChange}/>
  // ); 
const onSubmit = (data) => {
  console.log(data)
}
const { register, handleSubmit, formState: { errors }} = useForm();


  return(  
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Selecteer vak</p>
      <select {...register('book', { required: true, minLength:3 })}> 
        <option value="-">-</option>
        <option value="Wiskunde">Wiskunde</option>
        <option value="Nederlands">Nederlands</option>
        <option value="Groen">Groen</option>
        <option value="Logistiek">Logistiek</option>
        <option value="Handel en Verkoop">Handel en Verkoop</option>
      </select>
      <input name="file" type="file"  {...register('file', { required: true })}/>
      <p>Wat vond je van de opdracht?</p>
      <select {...register('difficulty', { required: true, minLength:3 })}>
        <option value="-">-</option>
        <option value="Makkelijk">Makkelijk</option>
        <option value="Normaal">Normaal</option>
        <option value="Moeilijk">Moeilijk</option>
      </select> 
      {errors.book &&<h3>Vul een vak in.</h3>}
      {errors.file && <h3>Kies een bestand</h3>}
      {errors.difficulty &&<h3>Vul in wat je van de opdracht vond.</h3>}
      <input type="submit" />
       <div><img src={happy} height="60px" width="60px"/> Makkelijk</div>
       <div><img src={meh} height="60px" width="60px"/> Normaal</div> 
       <div><img src={sad} height="60px" width="60px"/> Moeilijk</div>
    </form>
    
)

}
