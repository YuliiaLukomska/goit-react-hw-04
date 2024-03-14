import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import fetchPhotos from "./services/fetchPhotos";

function App() {
  const [query, setQuery] = useState(null);

  const onSetQueryValue = (queryValue) => {
    setQuery(queryValue);
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    const getPhotosByQuery = async () => {
      try {
        const result = await fetchPhotos(query);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Loader - false");
      }
    };
    getPhotosByQuery();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={onSetQueryValue} />
    </>
  );
}

export default App;
