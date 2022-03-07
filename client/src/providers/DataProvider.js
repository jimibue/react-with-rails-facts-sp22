import React, { useEffect, useState } from "react";
import axios from 'axios'

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [facts, setFacts] = useState([]);
  // onMount i want to run get Facts

  useEffect(()=>{
    // runs when component mounts 
    console.log('DataProvider mounted')
    getFacts()
  },[])

  const getFacts = async()=>{
    try {
      let res = await axios.get('api/facts')
      setFacts(res.data)
    } catch(err){
      alert('err getting facts')
      console.log(err.response.data)
    }
  }



  // create an object that will be 'global state'
  const factProviderThing = {
    getFacts,
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
