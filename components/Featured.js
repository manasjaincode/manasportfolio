import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
      
        width: '30px', 
        height: '40px', 
        borderRadius: '60%', 
        zIndex: 10,
        position: 'absolute',
        right: '-10px', // Position adjustment
      }}
      onClick={onClick}
    >
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
       
        width: '30px', 
        height: '40px', 
        borderRadius: '60%', 
        zIndex: 10,
        position: 'absolute',
        left: '-10px', // Position adjustment
      }}
      onClick={onClick}
    >
    </div>
  );
};

const FeaturedSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time to fit better on mobile
    slidesToScroll: 1,
    centerMode: true, // Center the current slide
    centerPadding: '0', // Adjust padding around center slide
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
            <div className="w-3 h-3 bg-white rounded-full" /> // Custom dot styling
          ),
          dotsClass: "slick-dots",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2, // Show 2 slides on medium screens
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1, // Show 1 slide on small screens
                slidesToScroll: 1,
              }
            },
          ]
        };
  const featuredItems = [
    {
      image: 'mayor idr.jpg',
      description: 'Mayor of Indore City - Shree Pushyamitra Bhargav ji, Appreciated me for Developing Scalable Solution/Product to improve Water Management Sytem of Indore. Many Functionalities will be implemented in official Website of Indore Municipal Corporation (IMC)',
    },
    {
      image: 'csslecture.jpg',
      description: ' "Learn Coding by Teaching Your Peers". One of the best ways to gain a deeper understanding of code and logic is by solving the doubts of others. Took a few lectures in college on CSS and JS during 4th sem.'
    },
    {
      image: 'Genai.jpg',
      description: 'Was just curious to know more about GenAi. Completed Google Cloud Study Jam GenAi course (earning 3 badges), before the deadline. ',
    },
    // Add more items if needed
  ];

  return (
    <div id='featured' className="bg-slate-800 pt-24 py-8 flex justify-center">
      <hr className="border-white mb-6" />
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4">
        <h2 className="text-5xl text-slate-400 font-bold font-mono mb-6 p-8 text-center">Featured</h2>
        <Slider {...settings} className="relative">
          {featuredItems.map((item, index) => (
            <div key={index} className="w-full p-4">
              <div className="relative group">
                <img
                  src={item.image}
                  alt={`Featured ${index + 1}`}
                  className="rounded-lg w-full h-40 sm:h-60 md:h-80 lg:h-[50vh] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-3 md:p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm md:text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedSection;
