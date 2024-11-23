import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt, placeholder, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : placeholder} // Load actual image only if visible
      alt={alt}
      className={className}
    />
  );
};

const App = () => {
  const placeholder = "./assets.image2.jpeg"; // Placeholder image

  return (
    <div>
      <h1>Lazy Loading Images</h1>
      <div style={{ height: "1000px" }}>Scroll down to load the image</div>
      <LazyImage
        src="./assets.image2.jpeg"
        placeholder={placeholder}
        alt="A beautiful view"
        className="lazy-image"
      />
    </div>
  );
};

export default App;