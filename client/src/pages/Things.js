import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Thing from './Thing'
import ThingForm from './ThingForm'
const Things = ()=>{
    const [things, setThings]= useState([])
    // useEffect(()=>{},[])
    useEffect(()=>{
        //do stuff when component mounts
        getThings()
    },[])

    const getThings = async ()=>{
      try{
        let res = await axios.get('/api/things')
        setThings(res.data)
      }catch(err){
          alert('err in getThings')
      }
    }

    const addThing = async (thing)=>{
       try{
          // add to DB
         let res = await axios.post('/api/things',thing)
          // add to State UI
         setThings([res.data, ...things])
       }catch(err){
         alert('err occured')
       }
    }

    const deleteThingMeth = async (id)=>{
        try{
           // add to DB
          let res = await axios.delete(`/api/things/${id}`)
           // delete from State UI
          setThings(things.filter(t=> t.id !== res.data.id))
        }catch(err){
          alert('err occured')
        }
     }

    const renderThings = ()=>{
        return things.map(t=> {
           return <Thing key={t.id} id={t.id} name={t.name} deleteThing={deleteThingMeth}/>
        })
    }
    
    return (
        <div className='border'>
            <h1>Things</h1>
            <ThingForm addThing={addThing}/>
            <hr />
            <p>{renderThings()}</p>
        </div>
    )
}
export default Things