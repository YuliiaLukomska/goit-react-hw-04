import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images !== null &&
        Array.isArray(images) &&
        images.map((image) => (
          <li key={image.id}>
            <ImageCard picture={image} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
