import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'


const FactShow = (props)=>{
    const params = useParams()
    const { state } = useLocation()
    
    useEffect(()=>{
        getFactFromProvider()
        getFactFromAPI()
        setFactFromRouter(state)
    },[])


    // three ways to get this fact data
    
    // through our provider
    const [factFromDataProvider, setFactFromDataProvider] = useState(null)
    const [factFromAPI, setFactFromAPI] = useState(null)
    const [factFromRouter, setFactFromRouter] = useState(null)
    const {facts} = useContext(DataContext)

    const getFactFromAPI = async()=>{
       try{
         let res = await axios.get(`/api/facts/${params.id}`)
         setFactFromAPI(res.data)
       }catch(err){
         alert('err')
       }
    }
    
    const getFactFromProvider =()=>{
  
      let fact = facts.find(f => f.id === parseInt(params.id))
      console.log(facts)
      console.log(fact)
      setFactFromDataProvider(fact)
    }

    return (
        <div className='border'>
            <h1>FactShow</h1>
           <p>id: {params.id}</p> 
           <p>factFromDataProvider</p>
           <code>{JSON.stringify(factFromDataProvider)}</code>
           <p>factFromAPI</p>
           <code>{JSON.stringify(factFromAPI)}</code>
           <p>factFromRouter</p>
           <code>{JSON.stringify(factFromRouter)}</code>
        </div>
    )
}

export default FactShow