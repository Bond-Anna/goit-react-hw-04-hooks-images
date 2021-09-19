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
