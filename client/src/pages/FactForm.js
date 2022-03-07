import React, { useEffect } from 'react'

const FactForm = (props)=>{
    useEffect(()=>{
        // runs when component mounts 
        console.log('FactForm mounted')

    
      },[])
    return (
        <div className='border'>
            <h1>FactForm</h1>
        </div>
    )
}

export default FactForm