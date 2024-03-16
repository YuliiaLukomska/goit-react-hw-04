import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick, isLoading }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading" : "Load more"}
    </button>
  );
};

export default LoadMoreBtn;
