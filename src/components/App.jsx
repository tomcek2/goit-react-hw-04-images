import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { useAppContext } from 'components/AppContext/AppContext';

export const App = () => {
  const { images, isLoading, fetchImages, page, query } = useAppContext();

  useEffect(() => {
    if (query.length > 0) fetchImages();
  }, [query, page]);

  return (
    <div>
      <Searchbar />
      <ImageGallery />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button />}
    </div>
  );
};

App.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchImages: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};
