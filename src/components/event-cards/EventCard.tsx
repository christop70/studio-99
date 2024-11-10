// EventCard.tsx
import React from "react";

interface EventCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
