import css from './galleryItem.module.css';
export const ImageGalleryItem = ({ img, largeImage, onSelect }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onSelect(largeImage)}>
      <img src={img} alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
};
