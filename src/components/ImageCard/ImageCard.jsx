const ImageCard = ({ picture, handleOpen }) => {
  return (
    <div
      onClick={() => handleOpen(picture.urls.regular, picture.alt_description)}
    >
      <img src={picture.urls.small} alt={picture.alt_description} />
    </div>
  );
};

export default ImageCard;
