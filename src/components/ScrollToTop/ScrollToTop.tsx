


// "use client"
// import { useState, useEffect } from "react";

// const ScrollToTopWithDynamicColor = () => {
//   const [scrollPercentage, setScrollPercentage] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//     // Calculate scroll percentage
//     const percentage = Math.min((scrollTop / scrollHeight) * 100, 100);
//     setScrollPercentage(percentage);

//     // Show/Hide the button after 500px
//     setIsVisible(scrollTop > 500);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Generate dynamic color using scroll percentage
//   const dynamicBgColor = `rgba(0, 123, 255, ${scrollPercentage / 100})`;

//   return (
//     <>


//       {/* Scroll to Top Button */}
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           style={{ backgroundColor: dynamicBgColor }}
//           className="fixed bottom-4 right-4 size-10 rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300"
//         >
//           ↑
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollToTopWithDynamicColor;  


"use client"

import { useState, useEffect } from "react";

const ScrollToTopWithRotatingColor = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Calculate scroll percentage
    const percentage = Math.min((scrollTop / scrollHeight) * 100, 100);
    setScrollPercentage(percentage);

    // Show/Hide the button after 500px
    setIsVisible(scrollTop > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate rotation angle (0 to 360 degrees based on scroll percentage)
  const rotationAngle = scrollPercentage * 3.6; // 100% = 360 degrees

  return (
    <>

      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            background: `conic-gradient(
              #667eea ${rotationAngle}deg,
              rgba(255, 255, 255, 0.1) ${rotationAngle}deg
            )`,
          }}
          className="fixed bottom-4 right-4 size-10 rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopWithRotatingColor;