import { useState } from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { movies } from './data';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="page">
        <Header />
        <div className="hero-content">
          <h1>Unlimited Movies, TV Shows & More</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <Link to={`/movies`} className="primarybtn">
            Explore Now
          </Link>
        </div>
      </div>
      <div className="movies-section">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            category={movie.category}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
