import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchPhotos from "./services/fetchPhotos";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Error from "./components/Error/Error";
import Empty from "./components/Empty/Empty";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

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
        const { results, total_pages } = await fetchPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages((prevState) => [...prevState, ...results]);
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

  const handleOpen = (url, alt) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };
  const handleClose = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={onSetQueryValue} />
      {isError && <Error />}
      {images.length > 0 && (
        <ImageGallery images={images} handleOpen={handleOpen} />
      )}
      {isVisible && <LoadMoreBtn onClick={loadMore} isLoading={isLoading} />}
      {isLoading && <Loader />}
      {isEmpty && <Empty />}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={handleClose}
        src={modalUrl}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
