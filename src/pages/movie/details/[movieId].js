import React from 'react';
import MovieDetails from '../../../components/MovieDetails';
import styles from '../../../styles/MovieDetails.module.scss';


const MovieDetailsPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>MINIFLIX</h1>
      </header>
      <MovieDetails />
    </div>
  );
};

export default MovieDetailsPage;
