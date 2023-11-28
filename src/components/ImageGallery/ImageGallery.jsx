import React, { Component } from 'react';
import style from 'components/styles.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.images !== nextProps.images;
  }

  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className={style.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={() => onImageClick(image)}
          />
        ))}
      </ul>
    );
  }
}
