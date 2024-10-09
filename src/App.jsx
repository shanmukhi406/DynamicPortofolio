import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Tailblocks/Pages/LandingPage';
import About from './Tailblocks/Components/About';
import Blog from './Tailblocks/Components/Blog';
import Contact from './Tailblocks/Components/Contact';



const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage change={handleTheme} />} />
          {/* Add more routes here as needed */}
          <Route path="/" element={<LandingPage change={handleTheme} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
