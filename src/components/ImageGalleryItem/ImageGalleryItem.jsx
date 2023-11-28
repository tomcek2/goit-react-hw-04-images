import React from 'react';
import style from 'components/styles.module.css';

export const ImageGalleryItem = ({ image, onClick }) => {
  console.log(image);
  return (
    <li className={style.ImageGalleryItem} onClick={onClick}>
      <img
        className={style.ImageGalleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};
