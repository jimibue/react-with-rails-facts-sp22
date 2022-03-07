import React, { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'

const Facts = (props)=>{
    const {facts} = useContext(DataContext)
    useEffect(()=>{
        // runs when component mounts 
        console.log('Facts mounted')

      },[])
    return (
        <div className='border'>
            <h1>Facts</h1>
            <div className='border'>
                <code>{JSON.stringify(facts)}</code>
            </div>
        </div>
    )
}

export default Facts