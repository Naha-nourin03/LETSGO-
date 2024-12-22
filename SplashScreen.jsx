// Note:This Is To Be Installed In Terminal
//npm install react-lottie
// npm install lottie-web


import React, { useEffect } from 'react';
import Lottie from "react-lottie";
import { useNavigate } from 'react-router-dom';
import splashAnimation from '../assets/2.json'; // Correct the relative path
// import './SplashScreen.css';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');  // Redirect to home after 3 seconds
    }, 3000);  // Adjust duration as needed
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
      <Lottie options={defaultOptions} height={400} width={400} />
     
    </div>
  );
}

export default SplashScreen;
