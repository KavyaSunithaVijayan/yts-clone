import MovieCard from "../../components/content/movieCard";
import "./HomePage.css";
function HomePage() {
  return (
    <div
      className="background"
      style={{ backgroundImage: "url('https://i.vimeocdn.com/video/586123185-3ab1c0feed27dc18e8f6c68887e80bf921546788bb83f0215f42cfd8616d109d-d?f=webp)" }}>
      <div className="home_container">
        <h1 className="home_text_head">
          Download YIFY movies: HD smallest size
        </h1>
        <p className="home_text">
          Welcome to the official YIFY website. Here you can browse and download
          YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at
          the smallest file size. YIFY Movies Torrents.
        </p>
        <div className="text_information">
          <h2 className="text_download">Popular Downloads</h2>
          <h4 className="more">more..</h4>
        </div>

        <hr className="first_line"></hr>
        <div className="menu">
          <h5 className="homepage_box">GO TO HOME PAGE</h5>
          <h5 className="latest_movie">Latest Movies</h5>
          <h5 className="popular_movie">Popular Movies</h5>
          <h5 className="browser">Browse 4K Movies</h5>
        </div>
        <hr className="second_line"></hr>
          <MovieCard />
      </div>
    </div>
  );
}

export default HomePage;
