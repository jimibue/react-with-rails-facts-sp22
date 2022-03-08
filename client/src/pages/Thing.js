import React from 'react'

const Thing = (props)=>{
    const {name, id, deleteThing } = props
     return (
         <div className='border'>
             <p>name: {name}</p>
             <p>id: {id}</p>
             <button onClick={()=> deleteThing(id)}>delete thing</button>
         </div>
     )
 }
 export default Thing