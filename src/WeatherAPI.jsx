import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Weatherapi.css";

const WeatherAPI = () => {
  const [data, setdata] = useState([]);
  console.log(data);
  const [city, setcity] = useState();
  const handleChange = (event) => {
  setcity(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!city) {
      alert("please enter a city ");
      return;
    }
    try {
    const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`);
    setdata(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="apibg p-1">
      <form className="justify-center flex" onSubmit={handleSubmit} action="">
        <div className="mx-32 mt-10 ml-56 justify-center flex p-8 bg-gray-300 w-[600px]">
          <div>
            <label> ENTER CITY : </label>
            <input onChange={handleChange} type="text" name="city" />
            <br></br>
            <br></br>
            <button className="bg-black text-white p-2 rounded-xl"type="submit">submit</button>
          </div>
        </div>
      </form>
      <div>
       {data&&
        <div className="ps-40 pt-10 text-red-950 font-bold flex">
        <div className=" px-60">
        {data?.name && <h3 className="text-8xl">{data?.name}</h3>}<br></br>
        {data?.main?.temp && <h3 className="text-4xl">temperature : {data?.main?.temp}</h3>}<br></br>
        {data?.wind?.speed && <h3 className="text-4xl">speed : {data?.wind?.speed}</h3>}<br></br>
        {data?.wind?.deg && <h3 className="text-4xl">deg : {data?.wind?.deg}</h3>}<br></br>
        {data?.id && <h3 className="text-4xl">id : {data?.id}</h3>}<br></br>
        </div>
        <div className=" pt-16">
        {data?.base && <h3 className="text-4xl">base : {data?.base}</h3>}<br></br>
        {data?.clouds?.all && <h3 className="text-4xl">base : {data?.clouds?.all}</h3>}<br></br>
        {data?.timezone && <h3 className="text-4xl">timezone : {data?.timezone}</h3>}<br></br>
        {data?.visibility && <h3 className="text-4xl">visibility : {data?.visibility}</h3>}<br></br>
        {data?.main?.pressure && <h3 className="text-4xl">pressure : {data?.main?.pressure}</h3>}<br></br>
        </div>
      </div>}
      </div>       
    </div>
  );
};
export default WeatherAPI;
