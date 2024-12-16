import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movieapi2 = () => {
  const [data, setData] = useState('');
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`
        );
        console.log(response);
        setData(response.data)
    }
    fetchData();
  },[]);
  return (
    <div>
        <img src={data.Poster} alt=""/>
        <h2>{data.Title}</h2>
        <h2>{data.Awards}</h2>
        <h2>{data.Year}</h2>
        <h2>{data.Rated}</h2>
        <h2>{data.Released}</h2>
    </div>
  );
};

export default Movieapi2;
