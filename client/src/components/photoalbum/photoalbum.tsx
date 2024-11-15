import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface PhotoAlbumProps {
    images: string[];
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({images}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return null; // Don't render anything on mobile
  }

  return (
    <div className="slide-container w-full max-w-2xl mx-auto overflow-hidden p-4"> {/* Set max-width and padding */}
      <Slide duration={3000} transitionDuration={500} infinite={true} arrows={true}>
        {images.map((image, index) => (
          <div key={index} className="each-slide w-full h-auto">
            <div className="image-container relative pt-[56.25%]"> {/* Maintain aspect ratio */}
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default PhotoAlbum;