import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchPhotos from "./services/fetchPhotos";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Error from "./components/Error/Error";
import Empty from "./components/Empty/Empty";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const onSetQueryValue = (queryValue) => {
    setQuery(queryValue);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setIsError(false);
    setIsVisible(false);
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    const getPhotosByQuery = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results, total, total_pages } = await fetchPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages((prevState) => [...prevState, ...results]);
        // якщо у нас page<загальної сторінки,то кнопка loadMore буде показуватись
        setIsVisible(page < total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosByQuery();
  }, [query, page]);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSetQueryValue} />
      {isError && <Error />}
      {images.length > 0 && <ImageGallery images={images} />}
      {isVisible && <LoadMoreBtn onClick={loadMore} isLoading={isLoading} />}
      {isLoading && <Loader />}
      {isEmpty && <Empty />}
    </>
  );
}

export default App;
