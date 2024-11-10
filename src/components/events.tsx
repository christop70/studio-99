// Events.tsx
import React from "react";
import EventCard from "./event-cards/EventCard"; // Import the EventCard component

interface Event {
  imageSrc: string;
  title: string;
  description: string;
}

const eventsData: Event[] = [
  {
    imageSrc: "./img/event/1.jpg",
    title: "Studio-99: Redefining Creative Excellence",
    description: "Description for event 1",
  },
  {
    imageSrc: "./img/event/2.jpg",
    title: "Explore Our Portfolio: The Best of Studio-99",
    description: "Description for event 2",
  },
  {
    imageSrc: "./img/event/3.jpg",
    title: "Transforming Concepts into Reality, One Pixel at a Time",
    description: "Description for event 3",
  },
  {
    imageSrc: "./img/event/4.jpg",
    title: "Bringing Ideas to Life with Style and Precision",
    description: "Description for event 4",
  },
  {
    imageSrc: "./img/event/5.jpg",
    title: "Innovative Solutions for Visual Storytelling",
    description: "Description for event 5",
  },
  {
    imageSrc: "./img/event/6.jpg",
    title: "Why Choose Studio-99? Discover Our Unique Approach",
    description: "Description for event 6",
  },
];

const Events: React.FC = () => {
  return (
    <div>
      {/* 2025 Season Line-up Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">2025 Season Line-up</h2>
        <div className="row">
          {eventsData.map((event, index) => (
            <EventCard
              key={index}
              imageSrc={event.imageSrc}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
