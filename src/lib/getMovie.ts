const GetMovie = async (id: string): Promise<IMDBMovie | null> => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=1a993ee0&i=${encodeURIComponent(id)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Error) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

export default GetMovie;
