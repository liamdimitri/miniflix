import React from 'react';
import Link from 'next/link';
import styles from '../styles/MovieList.module.scss';

const MovieList = ({ movies }) => {
  return (
    // Main container for the list of movies with an accessibility label
    <main className={styles.movieList} aria-label={'Movie Poster'}>
      {movies.map((movie) => (
        <section key={movie.imdbID} className={styles.movieItem}>
          <Link href={`/movie/details/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} className={styles.movieImage} />
          </Link>
        </section>
      ))}
    </main>
  );
};

export default MovieList;
