import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './MovieCard.css';

let apikey = 'c01e341b9cd7af286fd2ad88c67a609e';
const Trailer = () => {
  let [movieTrailer, setMovieTrailer] = useState('');
  let { id } = useParams();
  const history = useHistory();

  const getMovieTrailer = async (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieTrailer(data.results[0].key);
  };

  const goBack = () => {
    history.push(`/`);
  };

  useEffect(() => {
    getMovieTrailer(id);
  }, [id]);

  return (
    <div className="page trailer">
      {movieTrailer && (
        <iframe
          title="trailer"
          style={{ width: '80%', height: '80%' }}
          src={`https://www.youtube.com/embed/${movieTrailer}`}
        />
      )}
      <h1 onClick={() => goBack()}>Go back</h1>
    </div>
  );
};

export default Trailer;
