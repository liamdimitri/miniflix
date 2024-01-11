import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/MovieDetails.module.scss';

// MovieDetails component for displaying details of a single movie
const MovieDetails = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const [movieDetails, setMovieDetails] = useState(null);

  // State to hold movie details fetched from an API
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=c635991f&i=${movieId}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    // Call the fetchMovieDetails function when movieId is available
    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  // If movieDetails is not available, render a loading message
  if (!movieDetails) {
    return <h1 className={styles.loading}>Loading..</h1>;
  }

  // navigate back to the MovieList page
  const handleGoBack = () => {
    router.push('/'); 
  };

  // Render the movie details with an image, title, plot, IMDb rating, and a back button
  return (
    <div className={styles.movieDetails}>
      <article><img src={movieDetails.Poster} alt={`${movieDetails.Title} Poster`} /></article>
      <main>
        <h1 className={styles.title}>{movieDetails.Title}</h1>
        <article>{movieDetails.Plot}</article>
        <p>Rating: {movieDetails.imdbRating}</p>
        <button onClick={handleGoBack} aria-label={'Back'} alt={`Click to Go Back`}>←</button>
      </main>
    </div>
  );
};

export default MovieDetails;
