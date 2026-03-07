import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { options, url } from '../data';
import { Link } from 'react-router-dom';


const Movies = () => {
  const { movieCategory } = useParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]); // Original Copy
  const [filteredMovies, setFilteredMovies] = useState([]); // Display
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rating, setRating] = useState(0);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`${url}${movieCategory}`, options);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      setFilteredMovies(data.results);
    } catch (err) {
      setError(
        <div className='error-msg'>
        <img src='https://cdn-icons-png.flaticon.com/128/16490/16490899.png'/>
        <p className='error-text'>Unable to fetch data</p>
        </div>
      )
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (movieCategory) {
      fetchMovies();
    }
  }, [movieCategory]);

  const handleFilter = (value) => {
    setRating(value);

    if (value === 0) {
      setFilteredMovies(movies);
    } else {
      const updated = movies.filter((movie) => movie.vote_average >= value);
      setFilteredMovies(updated);
    }
  };

  return (
    <div>
      {/* 🔹 Top Row */}
      <div className="mp-header">
        <h2 className="logo" onClick={() => navigate('/')}>
          PikaShow
        </h2>

        <button className="back-btn" onClick={() => navigate('/')}>
          &#8592; Back
        </button>
      </div>
      <div className="movies-page">
        {/* 🔹 Filter Row */}
        <div className="filter-container">
          <select
            value={rating}
            onChange={(e) => handleFilter(Number(e.target.value))}
          >
            <option value="0">
              All Ratings
            </option>
            <option value="5">5+</option>
            <option value="6">6+</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
          </select>
        </div>

        {/* 🔹 Loading Shimmer */}
        {loading && (
          <div className="movies-container">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="shimmer-card"></div>
            ))}
          </div>
        )}

        {/* 🔹 Error */}
        {error && <div>{error}</div>}
        


        {/* 🔹 Movies */}
        {!loading && filteredMovies?.length > 0 && (
          <div className="movies-container">
            {filteredMovies?.map((movie) => (
              <div key={movie?.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* 🔹 No Results */}
        {!loading && !error && filteredMovies?.length === 0 && (
          <p className="no-results">No Results Found</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
