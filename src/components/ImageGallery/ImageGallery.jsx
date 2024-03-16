import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleOpen }) => {
  return (
    <ul className={css.galleryListWrapper}>
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
