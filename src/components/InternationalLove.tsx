import React from "react";
import CarouselComponent from "./movie-cards/Carousel";

const InternationalLove: React.FC = () => {
  // Custom images and titles for the new page's carousel
  const newImages = [
    "./img/love/1.jpg",
    "./img/love/2.jpg",
    "./img/love/3.jpg",
    "./img/love/4.jpg",
    "./img/love/5.jpg",
    "./img/love/6.jpg",
    "./img/love/7.jpg",
    "./img/love/8.jpg",
    "./img/love/9.jpg",
    "./img/love/10.jpg",
    "./img/love/11.jpg",
    "./img/love/12.jpg",
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
      <h2 className="sec-title">International Love</h2>
      <CarouselComponent
        images={newImages}
        titles={newTitles}
        interval={4000}
        styleClass="InternationalLove"
      />
    </div>
  );
};

export default InternationalLove;
