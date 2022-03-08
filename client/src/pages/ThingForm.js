import React, {useState} from 'react'

const ThingForm = (props)=>{
    const [name, setName] = useState(props.name || '')
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(props.id){
           // update
           props.updateThing({name, id:props.id})
        } else{
            props.addThing({name})
        }
        //????? Add to db
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>name</p>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <hr />
            <button>{props.id ? 'Update' : 'New'}</button> 
        </form>
    )
}

export default ThingForm