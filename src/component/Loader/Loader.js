import s from './Loader.module.css';
import stules from '../ImageGallery/ImageGallery.module.css';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from '../ImageGalleryItem';
import pendingImage from './pending.png';

export default function ImagePendingView() {
  return (
    <>
      <Loader
        className={s.loader}
        type="Circles"
        color="#3ccf9e"
        height={30}
        width={30}
      />
      <>
        <ul className={stules.imageGallery}>
          {Array(12)
            .fill()
            .map((item, index) => (
              <ImageGalleryItem
                key={index}
                webformatURL={pendingImage}
                largeImageURL={pendingImage}
              />
            ))}
        </ul>
      </>
    </>
  );
}
