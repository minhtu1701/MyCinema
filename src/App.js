import './App.css';
import React, { useState, useEffect } from 'react';
import Banner from './Components/Banner/Banner.js';
import Header from './Components/Header/Header';
import MovieList from './Components/MovieList/MovieList';
import SearchBar from './Components/SelectBar/SearchBar';

let apikey = 'c01e341b9cd7af286fd2ad88c67a609e';

function App() {
  let [movieList, setMovieList] = useState([]);
  let type = 'top_rated';
  let [genreList, setGenreList] = useState([]);

  const getGenre = async () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    setGenreList(data.genres);
  };

  useEffect(() => {
    getGenre();
  }, [type]);

  return (
    <div className="App">
      <Header />
      <Banner />
      <SearchBar setMovieList={setMovieList} />
      <MovieList list={movieList} genreList={genreList} />
    </div>
  );
}

export default App;
