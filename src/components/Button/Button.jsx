import React from 'react';
import style from 'components/styles.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={style.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
};
