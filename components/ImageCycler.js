// // src/components/ImageCycler.js
// 'use client'; // If this component is also a client component in Next.js

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const images = [
//   '/manascartoon1.png',
//   '/manascartoon2.png',
//   '/manascartoon3.png',
//   '/manascartoon4final.png',
// ];

// const ImageCycler = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 500); // 500 milliseconds = 0.5 seconds

//     // Clear the interval when the component unmounts to prevent memory leaks
//     return () => clearInterval(interval);
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <Image
//       src={images[currentImageIndex]}
//       alt="Manas Cartoon" // More generic alt text
//       width={352}
//       height={352}
//       className="object-contain w-full h-auto rounded-3xl"
//       // You can add Framer Motion for cross-fade animation if you want a smoother transition
//       // For example, if you wrap it in a motion.div:
//       // as it is: className="object-contain w-full h-auto rounded-3xl"
//     />
//   );
// };

// export default ImageCycler;