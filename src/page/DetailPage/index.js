import "./DetailPage.css";
import { useParams } from "react-router-dom";
import MovieData from "../../components/content/movieCard/MovieData.json";
import { IoMdHeart } from "react-icons/io";

function DetailPage() {
  let { id } = useParams();
  let res = MovieData.filter((movie) => {
    return movie.movieUrl === id;
  });
  let selectedMovie = res[0];
  return (
    <div
      className="p-5 bg-white border rounded shadows-sm h-full bg-cover no-repeat"
      style={{ backgroundImage: "url('/image/background.jpg')" }}
    >
      <div className="movie_details">
        <div>
          <img
            className="movie_poster"
            src="/image/identity-2003.jpg"
            alt="identity-2003.jpg"
          />
        </div>
        <div>
          <div className="discription">
            <h1>{selectedMovie.movieName}</h1>
            <h3>
              2003 <br></br>Action / Mystery / Thriller
            </h3>
          </div>
          <div className="platforms">
            <div className="text_available">Available in:</div>
            {selectedMovie?.available?.map((qty) => (
              <h5 className="text_one">{qty.quality}</h5>
            ))}
          </div>
          <IoMdHeart />
        </div>
        <div>
          <div className="similar_movies">
            <h3>YTS Similar Movies</h3>
          </div>
          <div className="movies_list">
            <img
              className="movie_one"
              src="/image/the-game-1997.jpg"
              alt="the-game-1997.jpg"
            />
            <img
              className="movie_second"
              src="/image/the-sixth-sense-1999.jpg"
              alt="the-sixth-sense-1999.jpg"
            />
          </div>
        </div>
      </div>
      <div className="download_option">
        <button className="dwonload_button">Download</button>
      </div>
      <div className="movie_trailer">
        <video width="95%" height="500px" controls>
          <source src="/image/YbjV5gAAAAA.mp4" type="video/mp4" />
          Identity movie trailer
        </video>
      </div>

      <div className="movie_shots">
        {selectedMovie?.asssets?.map((asset) =>(
            <>
              {asset.isImage === "false" ? (
                  <video width="100%" height="100%" controls>
                    <source src={asset.assetUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={asset.assetUrl}
                    alt={asset.assetUrl}
                    width="30%"
                    height="200px"
                  />
                )
              }
            </>
          ))}
      </div>
      <div className="content_details">
        <h2 className="identity_synopsis">
          Identity Synopsis <br></br>
          <span className="date_time">October 10, 2024 at 09:10 AM</span>
        </h2>
        <div className="movie_director">
          <h2>
            Identity Director<br></br>
          </h2>
          <div className="director_name">James Mangold</div>
          <hr></hr>
          <br></br>
          <h2>Identity Cast</h2>
          {selectedMovie?.cast?.map((cast) => (
            <div className="director_name">{cast}</div>
          ))}
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
