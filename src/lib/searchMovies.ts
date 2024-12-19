interface ResponseI {
  Search?: MovieArray;
  totalResults?: string;
  Error?: string;
  Response: string;
}

const SearchMovies = async (value: string): Promise<ResponseI | null> => {
  if (!value) {
    return null;
  }

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=1a993ee0&s=${encodeURIComponent(value)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = (await response.json()) as ResponseI;

    if (data.Error) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

export default SearchMovies;
