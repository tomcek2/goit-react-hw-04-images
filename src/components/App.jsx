import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

const API_KEY = '39394747-fa1f159daeb12a76c3032126a';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.images !== nextState.images ||
      this.state.isLoading !== nextState.isLoading
    );
  }

  componentDidCatch(error, info) {
    console.error('Error caught by componentDidCatch:', error, info);
  }

  handleSearchSubmit = query => {
    this.setState(
      { query, page: 1, images: [] },
      () => this.fetchImages(),
      console.log(this.stateimages)
    );
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.fetchImages()
    );
  };

  fetchImages = () => {
    const { query, page, images } = this.state;
    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    axios
      .get(url)
      .then(response => {
        this.setState(prevState => ({
          images:
            images.length === 0 && query === prevState.query
              ? [...response.data.hits]
              : [...prevState.images, ...response.data.hits],
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
