import React from "react";
import CarouselComponent from "./movie-cards/Carousel";

const ReformRestoration: React.FC = () => {
  // Custom images and titles for the new page's carousel
  const newImages = [
    "./img/restoration/1.jpg",
    "./img/restoration/2.jpg",
    "./img/restoration/3.jpg",
    "./img/restoration/4.jpg",
    "./img/restoration/5.jpg",
    "./img/restoration/6.jpg",
    "./img/restoration/7.jpg",
    "./img/restoration/8.jpg",
    "./img/restoration/9.jpg",
    "./img/restoration/10.jpg",
    "./img/restoration/11.jpg",
    "./img/restoration/12.jpg",
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
      <h2 className="sec-title">Reform and Restoration</h2>
      <CarouselComponent
        images={newImages}
        titles={newTitles}
        interval={4000}
        styleClass="ReformRestoration"
      />
    </div>
  );
};

export default ReformRestoration;
