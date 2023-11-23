import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';

const API_KEY = '39394747-fa1f159daeb12a76c3032126a';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    images: [],
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  handleSearchSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    axios
      .get(url)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
      </div>
    );
  }
}
