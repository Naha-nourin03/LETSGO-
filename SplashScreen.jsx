import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import splashAnimation from '../assets/2.json'; // Correct the relative path

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect to home after 3 seconds
    }, 3000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [navigate]);

  const defaultOptions = {
    loop: false, // Animation will play once
    autoplay: true, // Animation will start automatically
    animationData: splashAnimation, // Your Lottie animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="splash-screen">
      <div className="lottie-container">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
}

export default SplashScreen;


