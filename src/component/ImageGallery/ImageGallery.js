import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, largeURL }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
          imageClick={largeURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  // images: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     index: PropTypes.number.isRequired,
  //   }),
  // ),
  largeURL: PropTypes.func,
};
export default ImageGallery;
