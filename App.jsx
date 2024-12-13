import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddSp from './components/AddSp';
import Info from './components/Info';
import Camp from './components/Camp';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);  // Show splash screen for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddSp />} />
            <Route path="/info" element={<Info />} />
            <Route path="/camp" element={<Camp />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
