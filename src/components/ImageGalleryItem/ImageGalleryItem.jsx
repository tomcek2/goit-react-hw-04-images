import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { useAppContext } from 'components/AppContext/AppContext';

import style from 'components/styles.module.css';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const { setLargeImage, showModal, setShowModal } = useAppContext();

  const handleImageClick = image => {
    setLargeImage(image);
    setShowModal(true);
  };

  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => {
          handleImageClick(largeImageURL);
        }}
      />
      {showModal && <Modal />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
