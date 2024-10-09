import { motion } from 'framer-motion';
import React from 'react';
import './CitySkylinesHeader.css';

const CitySkylinesHeader = () => {
  return (
    <div className="city-skyline-header">
      <motion.div
        className="image-container"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1] }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
      <img 
        src={require('./hp_wallpaper.png')}
        alt="City Skyline"
        className="skyline"
      />
      </motion.div>
      <h1 className="overlay-text">Welcome to Himachal</h1>
    </div>
  );
};

export default CitySkylinesHeader;