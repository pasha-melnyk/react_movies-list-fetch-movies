const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'cf4cfe8c';

export const getMovie = async (title: string) => {
  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&t=${title}`);
    const movie = await response.json();

    return movie;
  } catch (error) {
    throw new Error(String(error));
  }
};
