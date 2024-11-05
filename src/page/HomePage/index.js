import MovieCard from "../../components/content/movieCard";
import "./HomePage.css";
import { FaStar } from "react-icons/fa";
import { FaSquareRss } from "react-icons/fa6";

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
          <h2 className="text_download"><span className="star_icon"><FaStar /></span>Popular Downloads</h2>
          <h4 className="more"><span className="rss_icon"><FaSquareRss /></span>more..</h4>
        </div>

        <hr className="first_line"></hr>
        <div className="menu">
          <span className="homepage_box">GO TO HOME PAGE</span>
          <span className="homepage_box">Latest Movies</span>
          <span className="homepage_box">Popular Movies</span>
          <span className="homepage_box">Browse 4K Movies</span>
        </div>
        <hr className="first_line"></hr>
          <MovieCard />
      </div>
    </div>
  );
}

export default HomePage;
