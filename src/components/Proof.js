import React from 'react'
import {fb} from "../base"

export default function Proof() {
  const onChange = (e) => {  
    const file = e.target.files[0]   //get file reference to file 
                                      //if you have more then one you need to loop trough them
    const storageRef = fb.storage().ref()  //define storage refference
    const fileRef = storageRef.child(file.name) //create new file
    fileRef.put(file).then(()=> {     //put in the data
      console.log("uploaded a file")   // if succes log message
    })
  }
  <h1>Lever hier je bewijs in!</h1>
  return (
    <input type="file" onChange={onChange}/>
  ); 
}
