import React, { useState, useEffect, useCallback } from 'react';
import '../SelectBar/SearchBar.css';
import Pagination from 'react-js-pagination';

const apiKey = 'c01e341b9cd7af286fd2ad88c67a609e';

const SearchBar = ({ setMovieList }) => {
  const [type, setType] = useState('popular');
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState({});
  let keyword = '';

  const GetMovie = useCallback(async () => {
    let url = `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=${page}`;
    let response = await fetch(url);
    let data = await response.json();
    setPageData(data);
    setMovieList(data.results);
  }, [setMovieList, type, page]);

  const getMovieByGenre = async (genreId) => {
    genreId = document.getElementById('filterByGenre').value;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieList(data.results);
  };

  const searchByKeyword = async (keyword) => {
    if (keyword === '' || keyword == null) {
      return '';
    }
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieList(data.results);
  };

  useEffect(() => {
    GetMovie();
  }, [GetMovie]);

  const handleChangeType = (selectedType) => {
    setType(selectedType);
    setPage(1);
  };

  return (
    <div>
      <div className="boxSelectBoard">
        <div id="selectBoard">
          <button
            disabled={type === 'popular'}
            className="selectBoardPopularBtn"
            onClick={() => handleChangeType('popular')}
          >
            Popular
          </button>
          <button
            disabled={type === 'top_rated'}
            className=""
            onClick={() => handleChangeType('top_rated')}
          >
            Top Rated
          </button>
          <button
            disabled={type === 'now_playing'}
            className=""
            onClick={() => handleChangeType('now_playing')}
          >
            Now Playing
          </button>
          <select
            id="filterByGenre"
            onChange={() => {
              getMovieByGenre();
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Filter By Genre
            </option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
          </select>
          <div className="searchSection">
            <input
              onChange={(event) => (keyword = event.target.value)}
              placeholder="Search movie"
              className="searchBtn"
            />
            <button onClick={() => searchByKeyword(keyword)}>Search</button>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <div className="boxSelectBoard pageNumber">
            <Pagination
              activePage={pageData.page}
              itemsCountPerPage={20}
              totalItemsCount={pageData.total_results || 200}
              pageRangeDisplayed={5}
              onChange={(pageNum) => setPage(pageNum)}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
