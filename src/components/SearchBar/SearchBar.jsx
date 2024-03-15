import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.query.value;
    if (!inputValue.trim()) {
      toast("Please enter some text to get a result!");
      return;
    }
    onSubmit(inputValue);
    event.currentTarget.reset();
  };

  return (
    <header>
      <Toaster
        toastOptions={{
          // Define default options

          style: {
            background: "grey",
            color: "#fff",
          },
        }}
      />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
