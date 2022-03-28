import React from 'react';
import { useEffect,useState } from 'react'
import SearchIcon from './img/search.svg'
import './App.css'
import MovieCard from './MovieCard'
//ce90f071
const API_URL = 'https://www.omdbapi.com?apikey=ce90f071'
// const movie1 = {
  
//     "Title": "Spiderman and Grandma",
//     "Year": "2009",
//     "imdbID": "tt1433184",
//   "Type": "movie",
//     // "Poster":'N/A'
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
   setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('spiderman')
  },[])
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e)=>{setSearchTerm(e.target.value);}} 
        ></input>
        <img src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0 ? (
              <div className="container">

            {movies.map((movie) => (
             <MovieCard movie={movie} /> 
            )) }
      </div>
        ) :
          (
            <div className="">
              <h2>No movies found</h2>
            </div>
          )
      }
  
    </div>
  );
}

export default App;
