import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAppContext } from 'components/AppContext/AppContext';

import style from 'components/styles.module.css';

export const Modal = () => {
  const { showModal, largeImage, setLargeImage, setShowModal } =
    useAppContext();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
        setLargeImage(null);
      }
    };

    const handleBackdropClick = e => {
      if (e.target.currentSrc === largeImage) {
        setShowModal(false);
        setLargeImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleBackdropClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleBackdropClick);
    };
  }, [showModal]);

  return (
    <div className={style.Overlay}>
      <div className={style.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  largeImage: PropTypes.string.isRequired,
  setLargeImage: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
