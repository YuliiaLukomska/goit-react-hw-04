const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.query.value;
    if (inputValue.trim() === "") {
      alert("Enter some text for getting result");
    }
    onSubmit(inputValue);
  };

  return (
    <header>
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