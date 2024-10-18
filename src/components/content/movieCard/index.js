import { Link } from "react-router-dom";
import './movieCard.css';

function MovieCard(){
    return(
        <Link to="detail">
        <div className="card">
            <div className="card_image">
                <img src="/image/identity-2003.jpg" alt="identity-2003.jpg"/>
            </div>
            <span className='movie_title'>Identity</span>
            <p className='movie_year'>2003</p>
        </div>
        </Link>
    )
}

export default MovieCard;