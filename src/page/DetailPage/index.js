import "./DetailPage.css";
import { useParams } from "react-router-dom";
import MovieData from "../../components/content/movieCard/MovieData.json";
import { IoMdHeart } from "react-icons/io";
import { FaImdb } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { IoDownloadOutline } from "react-icons/io5";

function DetailPage() {
  let { id } = useParams();
  let res = MovieData.filter((movie) => {
    return movie.movieUrl === id;
  });
  let selectedMovie = res[0];
  return (
    <div
      className="background"
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/2e/cb/bf/2ecbbf563fe2bc267e96ef902e12ecf6.jpg')" }}>
      <div className="name">
        <span>{selectedMovie.movieName}</span>
        <div className="year_genre">
          {selectedMovie.yearOfRelease} <br></br>
          {selectedMovie.genre}
        </div>
      </div>
      <div className="movie_details">
        <div>
          <img
            className="movie_poster"
            src={selectedMovie.img}
            alt={selectedMovie.yearOfRelease}
          />
          <div className="download_option">
            <button className="dwonload_button">Download</button>
          </div>
        </div>
        <div>
          <div className="discription">
            <h1>{selectedMovie.movieName}</h1>
            <h3>
              {selectedMovie.yearOfRelease} <br></br>
              {selectedMovie.genre}
            </h3>
          </div>
          <div className="like_details">
            {" "}
            <IoMdHeart size="20px" color="#6AC045" />{" "}
            <span className="movie_likes">{selectedMovie.like}</span>
          </div>
          <div className="imbd_details">
            <FaImdb size="20px" color="yellow" />

            <span className="movie_rating">{selectedMovie.movieRating}</span>
          </div>

          <div className="platforms">
            <div className="text_available">Available in:</div>
            {selectedMovie?.available?.map((qty) => (
              <h5 className="text_one">{qty.quality}</h5>
            ))}
          </div>

          <div>
            {selectedMovie?.available?.map((qty) => (
              <h5 className="text_two">
                <IoDownloadOutline className="download_icon" size="20px"/> {qty.quality}
              </h5>
            ))}
          </div>
          <span className="like_icon">
            {" "}
            <IoMdHeart />{" "}
          </span>

          <span className="likes">{selectedMovie.like}</span>
          <div>
            <span className="rating_icon">
              <FaImdb />
            </span>
            <span className="rating">{selectedMovie.movieRating}</span>
            <span className="rating_star">
              <FaStar />
            </span>
          </div>
        </div>
        <div>
          <div className="similar_movies">
            <h3>YTS Similar Movies</h3>
          </div>
          <div className="movies_list">
            {selectedMovie?.similarMovies?.map((sm) => (
              <img
                className="movie_one"
                src={sm.imageUrl}
                alt="the-game-1997.jpg"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="movie_trailer">
        <video width="100%" height="500px" controls>
          <source src={selectedMovie.video} type="video/mp4" />
        </video>
      </div>

      <div className="movie_shots">
        {selectedMovie?.asssets?.map((asset) => (
          <>
            {asset.isImage === "false" ? (
              <video width="30%" height="200px" controls>
                <source src={asset.assetUrl} type="video/mp4" />
              </video>
            ) : (
              <img
                src={asset.assetUrl}
                alt={asset.assetUrl}
                width="30%"
                height="200px"
              />
            )}
          </>
        ))}
      </div>
      <div className="content_details">
        <h2 className="synopsis">
          {selectedMovie.synopsis}
         <br/>
          <span className="date_time">{selectedMovie.dateAndTime}</span>
        </h2>
        <div className="movie_director">
          <h2>
            {selectedMovie.directorTitle}
           <br/>
          </h2>
          <span className="person_circle">
            {" "}
            <BsPersonCircle />
          </span>
          <span className="director_name">{selectedMovie.director}</span>
          <hr/><br/>
          <h2 className="cast_title">{selectedMovie.castTitle}</h2>

          {selectedMovie?.cast?.map((cast) => (
            <div>
              <span className="person_circle">
                {" "}
                <BsPersonCircle />
              </span>
              <span className="movie_cast">{cast}</span>
              <hr/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
