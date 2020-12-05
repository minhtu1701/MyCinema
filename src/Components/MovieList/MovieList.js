import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import '../MovieList/MovieList.css';
import { UpOutlined } from '@ant-design/icons';

const MovieList = ({ list, genreList }) => {
  return (
    <div>
      <div className="movieList">
        {list.map((item, index) => {
          return <MovieCard key={`movieCard-${index}`} movie={item} genreList={genreList} />;
        })}
      </div>
      <div className="goUpBtn">
        <button onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>
          Go Up <UpOutlined />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
