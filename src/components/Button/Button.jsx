import React from 'react';
import PropTypes from 'prop-types';

import { useAppContext } from 'components/AppContext/AppContext';

import style from 'components/styles.module.css';

export const Button = () => {
  const { setPage } = useAppContext();

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <button type="button" className={style.Button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  setPage: PropTypes.func.isRequired,
};
