import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  webformatURL = 'https://picsum.photos/600/400',
  largeImageURL = 'https://picsum.photos/600/400',
  tags,
  imageClick,
}) {
  return (
    <li className={s.imageGalleryItem}>
      <img
        src={webformatURL}
        data-sourse={largeImageURL}
        alt={tags}
        className={s.image}
        onClick={imageClick}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  imageClick: PropTypes.func,
};
