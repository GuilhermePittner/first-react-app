import React from 'react';
import './Banner.css'

interface BannerProps {
  imagePath: string,
  altText?: string
}

const Banner = ({imagePath, altText} :BannerProps) => {
  return (
    <header className='mybanner'>
        <img src={imagePath} alt={altText}/>
    </header>
  );
}

export default Banner;
