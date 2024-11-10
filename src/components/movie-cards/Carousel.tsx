import React from "react";
import { Carousel } from "react-bootstrap";
import ImageContainer from "./ImageContainer";
import "./Carousel.css";

interface CarouselProps {
  images: string[];
  titles: string[];
  interval?: number;
  styleClass?: string;
}

const CarouselComponent: React.FC<CarouselProps> = ({
  images,
  titles,
  interval = 3000,
  styleClass = "",
}) => {
  // Chunk the images into groups of 6
  const chunkedImages = [];
  const chunkSize = 6; // Number of images per slide

  for (let i = 0; i < images.length; i += chunkSize) {
    chunkedImages.push(images.slice(i, i + chunkSize));
  }

  return (
    <Carousel interval={interval} className={styleClass}>
      {chunkedImages.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-item-content d-flex justify-content-between">
            {chunk.map((image, i) => (
              // Adjust title index to match the chunk's range
              <ImageContainer
                key={i}
                src={image}
                title={titles[index * chunkSize + i]} // Adjusted title index
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
