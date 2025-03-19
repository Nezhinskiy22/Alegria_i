import React, { useState } from "react";
import Slider from "../components/Slider";
import PropertyCard from "../components/PropertyCard";
import "./Home.css";

const allProperties = [
  {
    id: "1",
    title: "Luxury Villa",
    price: "$1,200,000",
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: "$850,000",
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    id: "3",
    title: "Cozy Cottage",
    price: "$450,000",
    image: "https://picsum.photos/800/600?random=3",
  },
  {
    id: "4",
    title: "Spacious Loft",
    price: "$950,000",
    image: "https://picsum.photos/800/600?random=4",
  },
  {
    id: "5",
    title: "Family Home",
    price: "$650,000",
    image: "https://picsum.photos/800/600?random=5",
  },
  {
    id: "6",
    title: "Urban Studio",
    price: "$300,000",
    image: "https://picsum.photos/800/600?random=6",
  },
  {
    id: "7",
    title: "Penthouse",
    price: "$1,500,000",
    image: "https://picsum.photos/800/600?random=7",
  },
  {
    id: "8",
    title: "Country House",
    price: "$750,000",
    image: "https://picsum.photos/800/600?random=8",
  },
  {
    id: "9",
    title: "Beachfront Condo",
    price: "$1,100,000",
    image: "https://picsum.photos/800/600?random=9",
  },
  {
    id: "10",
    title: "Downtown Flat",
    price: "$800,000",
    image: "https://picsum.photos/800/600?random=10",
  },
  {
    id: "11",
    title: "Elegant Mansion",
    price: "$2,200,000",
    image: "https://picsum.photos/800/600?random=11",
  },
  {
    id: "12",
    title: "Modern Loft",
    price: "$1,000,000",
    image: "https://picsum.photos/800/600?random=12",
  },
  {
    id: "13",
    title: "Suburban Home",
    price: "$600,000",
    image: "https://picsum.photos/800/600?random=13",
  },
  {
    id: "14",
    title: "City Apartment",
    price: "$700,000",
    image: "https://picsum.photos/800/600?random=14",
  },
  {
    id: "15",
    title: "Riverside House",
    price: "$1,000,000",
    image: "https://picsum.photos/800/600?random=15",
  },
  {
    id: "16",
    title: "Sleek Condo",
    price: "$850,000",
    image: "https://picsum.photos/800/600?random=16",
  },
  {
    id: "17",
    title: "Historic Home",
    price: "$900,000",
    image: "https://picsum.photos/800/600?random=17",
  },
  {
    id: "18",
    title: "Luxury Penthouse",
    price: "$2,000,000",
    image: "https://picsum.photos/800/600?random=18",
  },
  {
    id: "19",
    title: "Charming Cottage",
    price: "$500,000",
    image: "https://picsum.photos/800/600?random=19",
  },
  {
    id: "20",
    title: "Modern Villa",
    price: "$1,300,000",
    image: "https://picsum.photos/800/600?random=20",
  },
];

const Home = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="home-container">
      <div className="slider-container">
        <Slider />
      </div>

      <div className="property-list">
        {allProperties.slice(0, visibleCount).map((property) => (
          <div className="property-card" key={property.id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {visibleCount < allProperties.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMore}>
            Більше
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
