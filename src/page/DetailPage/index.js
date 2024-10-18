import "./DetailPage.css";
function DetailPage() {
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
            <h1>Identity</h1>
            <h3>
              2003 <br></br>Action / Mystery / Thriller
            </h3>
          </div>
          <div className="platforms">
            <div className="text_available">Available in:</div>
            <h5 className="text_one">1080p.BluRay</h5>
            <h5 className="text_second">720p BluRay</h5>
            <h5 className="text_third">2160p.WEB.x265</h5>
          </div>
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
          <source src="YbjV5gAAAAA.mp4" type="video/mp4" />
          Identity movie trailer
        </video>
      </div>
      <div className="movie_shots">
        <img
          src="/image/identity-2003-medium-screenshot2.jpg"
          alt="identity-2003-medium-screenshot2.jpg"
          width="30%"
          height="200px"
        />
        <img
          src="/image/identity-2003-medium-screenshot3.jpg"
          alt="identity-2003-medium-screenshot3.jpg"
          width="30%"
          height="200px"
        />
        <img
          src="/image/tt0309698.jpg"
          alt="tt0309698.jpg"
          width="34%"
          height="200px"
        />
      </div>
      <div className="content_details">
        <h2 className="identity_synopsis">
          Identity Synopsis <br></br>
          <h6 className="date_time">October 10, 2024 at 09:10 AM</h6>
        </h2>
        <div className="movie_director">
          <h2>
            Identity Director<br></br>
          </h2>
          <div className="director_name">James Mangold</div>
          <hr></hr>
          <br></br>
          <h2>Identity Cast</h2>
          <div className="director_name">Amanda Peet</div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
