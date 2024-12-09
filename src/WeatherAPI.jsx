import axios from "axios";
import React from "react";
import { useState } from "react";

const WeatherAPI = () => {
const [data, setdata] = useState([]);

  console.log(data);
  const [data1,setdata1] = useState();
  const handlechange=(event)=>{
  setdata1({...data,[event.target.name]:event.target.value})
  }
  const handlesubmit=async(event)=>{
  event.preventDefault('')
 
                   try{
                    const response = await axios.get(
                                        `https://api.openweathermap.org/data/2.5/weather?q=${data1}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`);
                                        setdata(response.data);
                    
                   }
                   catch(e){
                    console.error(e);
                    
                   }
  setdata(data)                 
  }
  return (
    <div>
      <form onSubmit={handlesubmit} action="">
      <button >click here</button><br></br>
      <label>enter city </label>
      <input onChange={handlechange} type="text" name='city'/>
      <button>submit</button>
      </form>
    </div>
  );
};
export default WeatherAPI;
