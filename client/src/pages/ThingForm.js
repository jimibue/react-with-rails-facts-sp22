import React, {useState} from 'react'

const ThingForm = (props)=>{
    const [name, setName] = useState('')
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        props.addThing({name})
        //????? Add to db
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>name</p>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <hr />
            <button>add</button> 
        </form>
    )
}

export default ThingForm