
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [city,setCity]=useState('kochi')

  const [details,setDetails]=useState([])
  const [cel,setCel]=useState('')
  const [loc,setLoc]=useState('location')
  const [country,setCountry]=useState('country')
  const [wheather,setwheather]=useState('')
  const [wheatherdes,setWheatherDes]=useState('')



  const fetchData=async()=>{
    try{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=749a685450708f147a9b81b3ed9c905c&units=metric`)
      setDetails(response.data)
    }catch(error){
      alert("error")
    }
  }

  console.log(city);

  useEffect(()=>{
    let cel1=Math.floor(details?.main?.temp)
    setCel(cel1)
    setLoc(details.name)
    setCountry(details.sys?.country)
  })
  return (
    <div  className="App card shadow"  >
     
      <div style={{height:'600px', marginTop:'100px'}} className='container card w-600 h-800'>
      <div className='image'>
   
      
   <div className='m-4 text-center tex-light' style={{backgroundColor:'aqua'}}>
   <h2 className='text-center text-primary'>Wheather App</h2>
  
      <input onChange={(e)=>{setCity(e.target.value)}} style={{width:"600px",marginLeft:'460px'}} type="text" className='form-control w-25' />
      
      <button onClick={fetchData} className='btn btn-success rounded-pill mt-4'>Search</button>
   </div>
   <div className='wheather card shadow w-50' style={{marginLeft:'310px'}}>
<div className='main text-center text-primary'>
  <h4>{loc?loc:'Location'},{country}</h4>
  <h3>{cel?cel:'0'}<span>&deg;c</span> </h3>
  <h4>{details.wheather? details.wheather[0].description:'wheather'}</h4>
</div>
   </div>
   <div className='sub text-center text-primary'>
    <h4>{details.wheather?details.wheather[0].main:''}</h4>
   </div>
   <div className='display text-center text-primary '>
    <h3>Wheather Probabaly Like :&nbsp;{cel?cel:'0'}</h3>
   </div>
   </div>
      </div>
  
    </div>
  );
}

export default App;
