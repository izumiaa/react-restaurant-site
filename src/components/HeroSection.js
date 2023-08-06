import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/wok_cooking.mp4' autoPlay loop muted />
      <h1 className='heading-class'>Namaste Vaibhav</h1>
      <p>A Culinary Voyage to India's Roots</p>
      <div className='hero-btns'>
        <Button
            buttonStyle='btn--outline'
            scrollToSection='about'
          >
            Discover more
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;