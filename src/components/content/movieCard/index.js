import { Link } from "react-router-dom";
import "./movieCard.css";
import MovieData from "./MovieData.json";

function MovieCard() {
  return (
    <div className="card_container">
      {MovieData?.map((movie) => (
        <Link className="title_link" to={`/movie/${movie.movieUrl}`}>
          <div className="card">
            <div className="card_image">
              <img className="image" src={movie.img} alt={`${movie.movieName}-${movie.yearOfRelease}`} />
              <div className="card_hover_content">
                rating
              </div>
            </div>
            <span className="movie_title">{movie.movieName}</span>
            <p className="movie_year">{movie.yearOfRelease}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieCard;
