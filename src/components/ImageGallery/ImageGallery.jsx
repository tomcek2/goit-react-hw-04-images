import React from 'react';
import PropTypes from 'prop-types';

import { useAppContext } from 'components/AppContext/AppContext';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import style from 'components/styles.module.css';

export const ImageGallery = () => {
  const { images } = useAppContext();

  return (
    <ul className={style.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }, index) => (
        <ImageGalleryItem
          key={`${id}-${index}`}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};

Modal.propTypes = {
  images: PropTypes.array.isRequired,
};
