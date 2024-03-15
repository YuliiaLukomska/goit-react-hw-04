import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchPhotos from "./services/fetchPhotos";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Error from "./components/Error/Error";

function App() {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSetQueryValue = (queryValue) => {
    setQuery(queryValue);
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    const getPhotosByQuery = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const result = await fetchPhotos(query);
        console.log(result.data.results);
        setImages(result.data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosByQuery();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={onSetQueryValue} />
      {isError && <Error />}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
    </>
  );
}

export default App;
