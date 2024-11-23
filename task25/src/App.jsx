import React, { useRef } from 'react';

const ScrollToSection = () => {
  // Create a ref to the section you want to scroll to
  const sectionRef = useRef(null);

  // Function to scroll to the section
  const scrollToSection = () => {
    // Scroll the section into view
    sectionRef.current.scrollIntoView({
      behavior: 'smooth', // Smooth scroll animation
      block: 'start',     // Align the section to the top of the viewport
    });
  };

  return (
    <div>
      {/* Button to trigger the scroll */}
      <button onClick={scrollToSection}>Scroll to Section</button>

      {/* Some content to create scrollable space */}
      <div style={{ height: '100vh' }}>
        <h2>Scroll down to see the section below</h2>
      </div>

      {/* Target section to scroll to */}
      <div ref={sectionRef} style={{ height: '200px', backgroundColor: '#f0f0f0' }}>
        <h2>This is the section you scroll to</h2>
      </div>

      {/* Some more content */}
      <div style={{ height: '100vh' }}>
        <h2>More content below</h2>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ScrollToSection />
    </div>
  );
};

export default App;
