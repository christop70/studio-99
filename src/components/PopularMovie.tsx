import React from "react";
import CarouselComponent from "./movie-cards/Carousel"; // Import the reusable carousel component
import "./PopularMovie.css"; // Make sure the styles are in this file

const PopularMovie: React.FC = () => {
  // Custom images and titles for the new page's carousel
  const newImages = [
    "https://via.placeholder.com/192x256/1",
    "https://via.placeholder.com/192x256/2",
    "https://via.placeholder.com/192x256/3",
    "https://via.placeholder.com/192x256/4",
    "https://via.placeholder.com/192x256/5",
    "https://via.placeholder.com/192x256/6",
    "https://via.placeholder.com/192x256/7",
    "https://via.placeholder.com/192x256/8",
    "https://via.placeholder.com/192x256/9",
    "https://via.placeholder.com/192x256/10",
    "https://via.placeholder.com/192x256/11",
    "https://via.placeholder.com/192x256/12",
  ];

  const newTitles = [
    "Popular Movie 1",
    "Popular Movie 2",
    "Popular Movie 3",
    "Popular Movie 4",
    "Popular Movie 5",
    "Popular Movie 6",
    "Popular Movie 7",
    "Popular Movie 8",
    "Popular Movie 9",
    "Popular Movie 10",
    "Popular Movie 11",
    "Popular Movie 12",
  ];

  return (
    <div>
      <h2 className="sec-title">Popular Movies</h2>
      <CarouselComponent
        images={newImages}
        titles={newTitles}
        interval={4000}
        styleClass="PopularMovie"
      />
    </div>
  );
};

export default PopularMovie;
