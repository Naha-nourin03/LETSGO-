//Install This in Terminal 
// npm install react-masonry-css


import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from Unsplash API
    fetch(
      'https://api.unsplash.com/photos?client_id=HXb7f5JUrvN0iP50X_r_1A7gVKJXVQMWOCnSN0LueMs'
    )
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  // Breakpoint configurations for Masonry
  const breakpointColumnsObj = {
    default: 4, // 4 columns for large screens
    1100: 3,    // 3 columns for medium screens
    700: 2,     // 2 columns for smaller screens
    500: 2,     // 2 columns even on very small screens
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Let's G0</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {images.map((image) => (
          <div key={image.id} style={styles.card}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              style={styles.image}
            />
            <p style={styles.description}>{image.alt_description || 'Image'}</p>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '10px',
    // backgroundColor: '#f4f4f4',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  card: {
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  description: {
    padding: '10px',
    fontSize: '14px',
    color: '#555',
    textAlign: 'center',
  },
};

export default Home;
