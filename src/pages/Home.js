import React from "react";
import Slider from "../components/Slider";
import PropertyCard from "../components/PropertyCard";

// Статичні дані для прикладу
const hotProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    price: "$1,200,000",
    image: "https://picsum.photos/1500/800?random=1",
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: "$850,000",
    image: "https://picsum.photos/1500/800?random=2",
  },
  {
    id: 3,
    title: "Cozy Cottage",
    price: "$450,000",
    image: "https://picsum.photos/1500/800?random=3",
  },
];

const allProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    price: "$1,200,000",
    image: "https://picsum.photos/800/600?random=4",
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: "$850,000",
    image: "https://picsum.photos/800/600?random=5",
  },
  {
    id: 3,
    title: "Cozy Cottage",
    price: "$450,000",
    image: "https://picsum.photos/800/600?random=6",
  },
  // Можна додати інші об'єкти за потребою
];

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <Slider items={hotProperties} />
      <h1 style={{ color: "#0d47a1", marginTop: "20px" }}>
        Available Properties
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {allProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;
