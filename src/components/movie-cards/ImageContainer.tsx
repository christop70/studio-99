import React from "react";

interface ImageContainerProps {
  src: string;
  title: string;
  customStyle?: React.CSSProperties; // Optional prop for custom styles
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  title,
  customStyle,
}) => {
  return (
    <div className="image-container" style={customStyle}>
      <img className="image" src={src} alt={title} />
      <p className="image-title">{title}</p>
    </div>
  );
};

export default ImageContainer;
