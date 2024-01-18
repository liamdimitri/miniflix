import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchMovieDetailsById } from '../lib/api';
import styles from '../styles/MovieDetails.module.scss';

const MovieDetails = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (movieId) {
        const details = await fetchMovieDetailsById(movieId);
        setMovieDetails(details);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <h1 className={styles.loading}>Loading..</h1>;
  }

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <div className={styles.movieDetails}>
      <picture>
        <img 
          src={movieDetails.Poster} 
          alt={`${movieDetails.Title} Poster`} 
          loading="lazy" 
        />
      </picture>
      <main>
        <h1 className={styles.title}>
          {movieDetails.Title}
        </h1>
        <article>
          {movieDetails.Plot}
        </article>
        <p>
          Rating: {movieDetails.imdbRating}
        </p>
        <button onClick={handleGoBack} aria-label={'Back'} alt={`Click to Go Back`}>
          ←
        </button>
      </main>
    </div>
  );
};

export default MovieDetails;
