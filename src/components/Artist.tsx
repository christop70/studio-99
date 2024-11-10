import React from "react";
import CarouselComponent from "./movie-cards/Carousel";

const Artist: React.FC = () => {
  // Custom images and titles for the new page's carousel
  const newImages = [
    "./img/artist/1.jpg",
    "./img/artist/2.jpg",
    "./img/artist/3.jpg",
    "./img/artist/4.jpg",
    "./img/artist/5.jpg",
    "./img/artist/6.jpg",
    "./img/artist/7.jpg",
    "./img/artist/8.jpg",
    "./img/artist/9.jpg",
    "./img/artist/10.jpg",
    "./img/artist/11.jpg",
    "./img/artist/12.jpg",
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
      <h2 className="sec-title">Launching An Artist</h2>
      <CarouselComponent
        images={newImages}
        titles={newTitles}
        interval={4000}
        styleClass="Artist"
      />
    </div>
  );
};

export default Artist;
