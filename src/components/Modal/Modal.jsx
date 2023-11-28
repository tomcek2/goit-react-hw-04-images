import React, { Component } from 'react';
import style from 'components/styles.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { large, tags } = this.props;

    return (
      <div className={style.Overlay} onClick={this.handleBackdropClick}>
        <div className={style.Modal}>
          <img src={large} alt={tags} />
        </div>
      </div>
    );
  }
}
