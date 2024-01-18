import React from 'react';
import Link from 'next/link';
import styles from '../styles/MovieList.module.scss';

const MovieList = ({ movies }) => {
  return (
    // Main container for the list of movies with an accessibility label
    <main className={styles.movieList} aria-label={'Movie Poster'}>
      {movies.map((movie) => (
        <section key={movie.imdbID} className={styles.movieItem}>
          {/* Create a Next.js link to the movie details page */}
          <Link href={`/movie/details/${movie.imdbID}`}>
            {/* Use a 'picture' element with an 'img' for the movie poster */}
            <picture>
              <img src={movie.Poster} alt={movie.Title} className={styles.movieImage} />
            </picture>
          </Link>
        </section>
      ))}
    </main>
  );
};

export default MovieList;
