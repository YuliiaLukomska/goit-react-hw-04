const LoadMoreBtn = ({ onClick, isLoading }) => {
  return (
    <button onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading" : "Load more"}
    </button>
  );
};

export default LoadMoreBtn;
