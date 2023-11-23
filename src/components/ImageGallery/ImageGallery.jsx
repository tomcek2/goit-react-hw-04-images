import React from 'react';
import style from 'components/styles.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={style.ImageGallery}>
      {images.map(image => (
        <li key={image.id} className={style.ImageGalleryItem}>
          <img
            className={style.ImageGalleryItemImage}
            src={image.webformatURL}
            alt=""
          />
        </li>
      ))}
    </ul>
  );
};
