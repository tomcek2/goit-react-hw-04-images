import React, { Component } from 'react';
import style from 'components/styles.module.css';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImageURL: this.props.largeImageURL,
  };

  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { largeImageURL, showModal } = this.state;
    const { webformatURL, tags } = this.props;
    const { toggleModal } = this;
    return (
      <li className={style.ImageGalleryItem} onClick={toggleModal}>
        <img
          className={style.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
        {showModal && (
          <Modal onClose={toggleModal} large={largeImageURL} alt={tags} />
        )}
      </li>
    );
  }
}
