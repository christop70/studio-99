import React from "react";
import CarouselComponent from "./movie-cards/Carousel";

const HealingTherapy: React.FC = () => {
  // Custom images and titles for the new page's carousel
  const newImages = [
    "./img/therapy/1.jpg",
    "./img/therapy/2.jpg",
    "./img/therapy/3.jpg",
    "./img/therapy/4.jpg",
    "./img/therapy/5.jpg",
    "./img/therapy/6.jpg",
    "./img/therapy/7.jpg",
    "./img/therapy/8.jpg",
    "./img/therapy/9.jpg",
    "./img/therapy/10.jpg",
    "./img/therapy/11.jpg",
    "./img/therapy/12.jpg",
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
      <h2 className="sec-title">Healing Not Therapy</h2>
      <CarouselComponent
        images={newImages}
        titles={newTitles}
        interval={4000}
        styleClass="HealingTherapy"
      />
    </div>
  );
};

export default HealingTherapy;
