const ImageCard = ({ picture }) => {
  return (
    <div>
      <img src={picture.urls.small} alt={picture.alt_description} />
    </div>
  );
};

export default ImageCard;
