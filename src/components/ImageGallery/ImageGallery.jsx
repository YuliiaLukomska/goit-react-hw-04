import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, handleOpen }) => {
  return (
    <ul>
      {images !== null &&
        Array.isArray(images) &&
        images.map((image) => (
          <li key={image.id}>
            <ImageCard picture={image} handleOpen={handleOpen} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
