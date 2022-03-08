import React from 'react'
import ThingForm from './ThingForm'

const Thing = (props)=>{
    const {name, id, deleteThing, updateThing } = props
     return (
         <div className='border'>
             <p>name: {name}</p>
             <p>id: {id}</p>
             <button onClick={()=> deleteThing(id)}>delete thing</button>
             <ThingForm id={id} name={name} updateThing={updateThing} />
         </div>
     )
 }
 export default Thing