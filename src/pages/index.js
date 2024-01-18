import React, { useEffect } from 'react';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../lib/api';
import { logBrowserInfo } from './browserDetection';
import styles from '../styles/MovieList.module.scss';

const Home = ({ movies }) => {
  useEffect(() => {
    logBrowserInfo();
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <h1>MINIFLIX</h1>
      </header>
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
  );
};

// Fetch movies during build time using getStaticProps
export async function getStaticProps() {
  const movieTitles = ['Interstellar', 'Django Unchained', 'Inglourious Basterds', 'Uncut Gems', 'The Wolf of Wall Street', 'Like Mike', 'Step Brothers', 'Talk To Me', 'Training Day', 'Harry Potter', 'Superbad', 'Parasite'];

  // Use the fetchMovies function from api.js
  const movies = await fetchMovies(movieTitles);

  return {
    props: {
      movies,
    },
  };
}

export default Home;
