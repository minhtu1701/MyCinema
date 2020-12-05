import React from 'react';
import '../MovieCard/MovieCard.css';
import Badge from 'react-bootstrap/Badge';
import { useHistory } from 'react-router-dom';
import { PlayCircleOutlined, StarFilled, VideoCameraOutlined } from '@ant-design/icons';
import { Icon, InlineIcon } from '@iconify/react';
import infoCircleOutlined from '@iconify-icons/ant-design/info-circle-outlined';

const MovieCard = ({ movie, genreList }) => {
  const history = useHistory();
  const gotoTrailer = (index) => {
    history.push(`/trailer/${index}`);
  };

  if (!movie) {
    return (
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <VideoCameraOutlined spin style={{ fontSize: '50px' }} />
      </div>
    );
  }

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
            className="cardImage"
            alt=""
          />
        </div>
        <div className="flip-card-back">
          <div className="movieTitle">{movie.title}</div>
          <div className="rating">
            <StarFilled style={{ color: '#db7100' }} /> &nbsp;
            <span style={{ height: '16px' }}>{movie.vote_average}</span>
          </div>
          <div className="genre">
            {movie &&
              movie.genre_ids.length > 0 &&
              movie.genre_ids.map((id, index) => {
                return (
                  <Badge key={`badge-${index}`} variant="light" style={{ marginRight: '3px' }}>
                    {genreList &&
                      genreList.length > 0 &&
                      genreList.find((item) => item.id === id).name}
                  </Badge>
                );
              })}
          </div>
          <div className="movieDes">{movie.overview}</div>
          <div>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_">
              <Icon style={{ fontSize: '27px', color: 'black' }} icon={infoCircleOutlined} />
            </a>
            &nbsp;
            <PlayCircleOutlined
              style={{ fontSize: '25px' }}
              onClick={() => {
                gotoTrailer(movie.id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
