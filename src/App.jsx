import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchPhotos from "./services/fetchPhotos";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSetQueryValue = (queryValue) => {
    setQuery(queryValue);
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    const getPhotosByQuery = async () => {
      try {
        setIsLoading(true);
        const result = await fetchPhotos(query);
        console.log(result.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosByQuery();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={onSetQueryValue} />
      {isLoading && <Loader />}
      <ul>
        {images !== null &&
          Array.isArray(images) &&
          images.map((image) => {
            <li key={image.key}></li>;
          })}
      </ul>
    </>
  );
}

export default App;
