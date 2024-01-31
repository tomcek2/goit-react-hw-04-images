import React from 'react';
import { ColorRing } from 'react-loader-spinner';

import style from 'components/styles.module.css';

export const Loader = () => {
  return (
    <div className={style.Loader}>
      <ColorRing
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
      />
    </div>
  );
};
