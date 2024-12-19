const GetMovie = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=1a993ee0&i=${encodeURIComponent(id)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log('data', data);

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
