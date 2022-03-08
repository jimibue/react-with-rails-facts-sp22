import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  // const navigate = useNavigate()
  const [facts, setFacts] = useState([]);
  // onMount i want to run get Facts

  useEffect(()=>{
    // runs when component mounts 
    console.log('DataProvider mounted')
    getFacts()
  },[])

  const getFacts = async()=>{
    try {
      let res = await axios.get('/api/facts')
      setFacts(res.data)
    } catch(err){
      alert('err getting facts')
      console.log(err.response.data)
    }
  }
  //create
  // 1. get data from form to method DONE
  const addFact = async (fact, navigate)=>{
    //2. try to add to db
    try{
       let res = await axios.post('/api/facts', fact)
       // HERE WE SUCCESSFULLY ADDED FACT TO DB
       //3. ADD TO STATE(UI) 
       setFacts([res.data, ...facts])
       // 4.  AND UX step Navigate
       navigate('/facts')
      } catch(err){
        console.log(err)
        console.log(err.response)
      }
  }

  // update 
  // 1. get data from form to method 
  const updateFact = async (fact, navigate)=>{
    console.log('fact:', fact)
    //2. try to add to db
    try{
      let res = await axios.put(`/api/facts/${fact.id}`, fact)
      //3. update TO STATE(UI) 
      const updatedFacts = facts.map(f => f.id === res.data.id ? res.data : f)
      setFacts(updatedFacts)
      // 4.  AND UX step Navigate
      navigate('/facts')
      console.log(res)
    } catch(err){
      console.log(err)
    }
  }
  //DELETE
  // 1. NEED TO REMOVE FROM DB
  // 2. NEED TO REMOVE FROM FE
  // 3. NEED TO hookup button click
  const deleteFact = async(id) => {
     try{
       // Step 1
       let res = await axios.delete(`/api/facts/${id}`)
       // Step 2
       let filteredFacts = facts.filter(f=> f.id !== id)
       setFacts(filteredFacts)
        
     } catch(err){
       alert('err in deleting')
     }
  }



  // create an object that will be 'global state'
  const factProviderThing = {
    getFacts,
    deleteFact,
    addFact,
    updateFact,
    facts
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={factProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
