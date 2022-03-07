import React, { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import Fact from './Fact'

const Facts = (props)=>{
    const {facts} = useContext(DataContext)
    useEffect(()=>{
        // runs when component mounts 
        console.log('Facts mounted')
      },[])
    const renderFacts = ()=> {
      return facts.map((fact)=>{
         return <Fact key={fact.id}{...fact} />
      })
    } 
    return (
        <div className='border'>
            <h1>Facts</h1>
            <div className='border'>
                <code>{renderFacts()}</code>
            </div>
            <div className='border'>
                <code>{JSON.stringify(facts)}</code>
            </div>
        </div>
    )
}

export default Facts