import axios from 'axios';
import React, { useState, createContext, useContext } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(API_KEY + BASE_URL);

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fetchImages = () => {
    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    console.log(url);
    setIsLoading(true);

    axios
      .get(url)
      .then(response => {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      });
  };

  const appValue = {
    images,
    setImages,
    query,
    setQuery,
    page,
    setPage,
    isLoading,
    fetchImages,
    largeImage,
    setLargeImage,
    showModal,
    setShowModal,
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};
