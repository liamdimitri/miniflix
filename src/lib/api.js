import axios from 'axios';

const apiKey = 'c635991f';

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
    const { Title, Plot, imdbRating, imdbID } = response.data;
    
    // Use the poster API URL for the thumbnail
    const thumbnail = `http://img.omdbapi.com/?apikey=${apiKey}&i=${id}`;

    return {
      id: imdbID,
      title: Title,
      thumbnail: thumbnail,
      description: Plot,
      rating: imdbRating,
    };
  } catch (error) {
    console.error('API Error:', error);
    // Handle the error..
    throw error; // Rethrow the error for further handling
  }
};
