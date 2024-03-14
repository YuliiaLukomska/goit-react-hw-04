import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState(null);

  const onSetQueryValue = (queryValue) => {
    setQuery(queryValue);
  };

  useState(() => {
    if (query === null) {
      return;
    }
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={onSetQueryValue} />
    </>
  );
}

export default App;
