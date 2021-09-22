import css from './galleryItem.module.css';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ img, largeImage, onSelect }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onSelect(largeImage)}>
      <img src={img} alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
