import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Movieapi = () => {
  const [data, setdata] = useState([]);
  const [movie, setmovie] = useState('');
  const handleChange = (event) => {
  setmovie(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!movie) {
      alert("Please enter a movie");
      return;
    }
    try {
      const response = await axios.get(
      `https://www.omdbapi.com/?s=${movie}&apikey=a5ef1268`);
      if (response.data.Search) {
      setdata(response.data.Search);
      } else {
        setdata([]);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <form className="justify-center flex pt-8" onSubmit={handleSubmit}>
        <div className="justify-center flex p-8 bg-red-400">
          <div>
            <label> ENTER MOVIE: </label>
            <input onChange={handleChange} type="text" name="movie" /><br /><br />
            <button className="bg-red-700 text-white p-2 rounded-xl" type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.imdbID}>
              <h3>{item.Title}</h3>
              <h3>{item.Year}</h3>
              <h3>{item.imdbID}</h3>
              <h3>{item.Type}</h3>
              <Link to={`/movieapi2/${item.imdbID}`}>
              <img src={item.Poster} alt={`${item.Title} Poster`} />
              </Link>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};
export default Movieapi;
