import React from 'react';
import MovieList from '../components/MovieList';
import styles from '../styles/MovieList.module.scss';
import { useEffect } from 'react';
import { logBrowserInfo } from './browserDetection';

const Home = ({ movies }) => {
  // Call the function to log browser information once when the component mounts
  useEffect(() => {
    logBrowserInfo();
  }, []); // Empty dependency array ensures this effect runs only once

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

export async function getStaticProps() {
  // Specify a list of movie titles for a pseudo-random selection
  const movieTitles = ['Interstellar', 'Django Unchained', 'Inglourious Basterds', 'Uncut Gems', 'The Wolf of Wall Street', 'Like Mike', 'Step Brothers', 'Talk To Me', 'Training Day', 'Harry Potter', 'Superbad', 'Parasite'];

  // Sort the array randomly using Math.random()
  const shuffledTitles = movieTitles.sort(() => Math.random() - 0.5);

  // Fetch movie details for each title
  const moviePromises = shuffledTitles.map(async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=c635991f&t=${encodeURIComponent(title)}`);
    return response.json();
  });

  // Wait for all promises to resolve
  const movies = await Promise.all(moviePromises);

  return {
    props: {
      movies,
    },
  };
}

export default Home;
