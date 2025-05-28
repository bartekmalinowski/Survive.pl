// components/SurvivalNews.tsx
"use client"; // Komponent klientowy
'use'
import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SurvivalNews = () => {
  const [news, setNews] = useState([
    {
      title: 'Earthquake in Rybnik',
      link: 'https://www.example.com/earthquake-in-rybnik',
      date: '2023-02-20',
      description: 'A powerful earthquake struck Rybnik, causing widespread damage and injuries.',
    },
    {
      title: 'Flood in Paczynka',
      link: 'https://www.example.com/flood-in-paczynka',
      date: '2023-02-15',
      description: 'Flood caused by the destruction of the dam, resulting in the entire village being flooded.',
    },
    {
      title: 'Factory Fire in Krakow',
      link: 'https://www.example.com/forest-fire-in-krakow',
      date: '2023-02-10',
      description: 'A massive Amazon factory fire burned in Krakow, threatening wildlife and homes.',
    },
    {
      title: 'Hurricane in Szczecin',
      link: 'https://www.example.com/hurricane-in-szczecin',
      date: '2023-02-05',
      description: 'A powerful hurricane struck Szczecin, causing widespread destruction and loss of life.',
    },
    {
      title: 'Landslide in Zakopane',
      link: 'https://www.example.com/landslide-in-zakopane',
      date: '2023-01-30',
      description: 'A devastating landslide hit Zakopane, causing injuries and property damage.',
    },
    {
      title: 'Snowstorm in the Southeast',
      link: 'https://www.example.com/snowstorm-in-the-southeast',
      date: '2023-01-25',
      description: 'A severe snowstorm hit the Southeast, causing travel disruptions and power outages.',
    },
    {
      title: 'Tornado in Mala Wies',
      link: 'https://www.example.com/tornado-in-mala-wies',
      date: '2023-01-20',
      description: 'A destructive tornado struck Mala Wies, causing injuries and property damage.',
    },
  ]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div
      className="survival-news-container"
      style={{
        width: '1090px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem',
          color: '#333',
          marginBottom: '15px',
        }}
      >
        Survival News
      </h2>
      <div
        className="news-slider"
        style={{
          position: 'relative',
          paddingBottom: '40px',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // Server-side rendering
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 0.8s ease-in-out"
          transitionDuration={800}
          centerMode={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          renderDotsOutside={true}
        >
          {news.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '15px',
                marginLeft: '5px',
                marginRight: '5px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                background: '#fff',
                textAlign: 'left',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', margin: '10px 0', color: '#007bff' }}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '10px',
                    color: '#000',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                >
                  {item.title}
                </a>
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#444',
                  marginBottom: '10px',
                  lineHeight: '1.5',
                }}>
                {item.description}
              </p>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#888',
                  marginTop: '10px',
                  fontStyle: 'italic',
                }}
              >
                {item.date}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SurvivalNews;