import axios from 'axios';

// Function to fetch movie details by ID from the OMDB API
export const fetchMovieDetailsById = async (movieId) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=c635991f&i=${movieId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

// Function to fetch a list of movies with details from the OMDB API
export const fetchMovies = async (titles) => {
  const moviePromises = titles.map(async (title) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=c635991f&t=${encodeURIComponent(title)}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  });

  // Wait for all promises to resolve
  const movies = await Promise.all(moviePromises);

  return movies;
};
