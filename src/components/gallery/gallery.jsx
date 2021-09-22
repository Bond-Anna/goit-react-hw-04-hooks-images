import PropTypes from 'prop-types';
import css from './gallery.module.css';
import { ImageGalleryItem } from '../galleryItem/galleryItem';
export const ImageGallery = ({ pictures, onSelect }) => {
  return (
    <ul className={css.ImageGallery}>
      {pictures.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          img={webformatURL}
          largeImage={largeImageURL}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onSelect: PropTypes.func,
};
