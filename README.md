# Image Finder App

Image Finder App application allows you to search for images using the Pixabay
API. You can enter a search query, and the app will display a grid of images
related to your search.

## Features

- **Searchbar:** Enter your search query in the search bar and press the
  "Search" button.

- **Image Gallery:** View the search results in a gallery format with the option
  to load more images.

- **Load More Button:** Click the "Load more" button to fetch additional images
  and add them to the gallery.

- **Image Modal:** Click on an image to open a modal with a larger view of the
  image.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/tomcek2/goit-react-hw-03-image-finder.git
   ```

2. Navigate to the project directory:

   ```shell
   cd image-finder-app
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Obtain a Pixabay API key:

   [Pixabay API](https://pixabay.com/api/docs/)

5. Change your API key in App.jsx:

   ```js
   const API_KEY = 'your_api_key';
   ```

## How To Run

1. Start the development server:

   ```shell
   npm start
   ```

   The app will be accessible at http://localhost:3000 in your browser.

## Directory Structure

- src: Source code of the application.
- components: React components (Button, ImageGallery, ImageGalleryItem, Loader,
  Modal, Searchbar).
- style.css: Stylesheet.
- App.js: Main application component.
- index.js: Entry file.

## Technologies Used

- React.js
- Axios for API requests
- React Loader Spinner for loading animations
- CSS Modules for styling

## Author

Tomek Cekała
