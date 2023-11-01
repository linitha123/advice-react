import { useEffect, useState } from 'react'
import './App.css'

let App = () => {
    let [advise,setAdvise] = useState('')

    let fetchData = async ()=>{
        let fetchInput =  await fetch('https://api.adviceslip.com/advice')
        let result = await fetchInput.json()
     let {advice} =  (result.slip)
     setAdvise(advice)
 

    }
  
   
   useEffect(()=>{
       fetchData()
         },[])
       
        
    return(
<div className='app'>
       <div className='container'>
       <h1>{advise}</h1>
       <button onClick={fetchData}>get</button>
       </div>
        </div>
    )
}

export default App