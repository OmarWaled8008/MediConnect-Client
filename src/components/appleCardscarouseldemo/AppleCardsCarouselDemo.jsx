"use client";
import React, { useEffect, useState } from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";
import { Link } from "react-router-dom";

export function AppleCardsCarouselDemo() {
  const [dataCard, setDataCard] = useState(null);
  useEffect(() => {
    setDataCard(JSON.parse(localStorage.getItem("data")));
  }, []);

  if (!dataCard) {
    return <div>Loading...</div>;
  }
  const cards = dataCard.map((card, index) => (
    <Card
      key={card.src}
      card={{
        ...card,
        content: <DummyContent text={dummyContentData[index].text} />,
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-da">
        Latest from Our Blog
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ text }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-dark p-8 rounded-3xl mb-2 flex flex-col justify-center items-center"
          >
            <p className="text-light text-base md:text-2xl max-w-3xl mx-auto mb-3">
              {text}
            </p>
            <Link to="#" className="shadow-none text-light bg-pr p-2 rounded-md">
              Read More...
            </Link>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Health",
    title: "Understanding Telemedicine: A Guide for Patients",
  },
  {
    category: "Technology",
    title: "Top 5 Tips for Choosing the Right Doctor",
  },
  {
    category: "Wellness",
    title: "The Future of Healthcare: Innovations to Watch",
  },

  {
    category: "Health",
    title: "Healthy Eating Habits for a Better Life",
  },
  {
    category: "Wellness",
    title: "Mental Health Awareness: Breaking the Stigma",
  },
];
localStorage.setItem("data", JSON.stringify(data));

const dummyContentData = [
  {
    text: "Learn about the benefits of telemedicine, how it works, and how you can use it for your healthcare needs...",
  },
  {
    text: "Finding the right doctor can be a challenge. Here are our top tips for making an informed decision...",
  },
  {
    text: "Explore the latest innovations in healthcare technology and what they mean for the future of medical care...",
  },
  {
    text: "Learn about the importance of mental health and how to support those around you...",
  },
  {
    text: "Learn about the importance of mental health and how to support those around you...",
  },
];
