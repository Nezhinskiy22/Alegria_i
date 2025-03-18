import React from "react";
import { useParams } from "react-router-dom";

// Приклад статичних даних. У реальному застосунку дані будуть завантажуватись з API.
const sampleProperties = [
  {
    id: "1",
    title: "Luxury Villa",
    price: "$1,200,000",
    description:
      "Beautiful villa with modern amenities, spacious garden, and a pool. A perfect blend of luxury and comfort.",
    image: "https://picsum.photos/1200/800?random=1",
    details: {
      beds: 5,
      baths: 4,
      area: "5000 sqft",
      location: "Ukrainian City, Region",
      yearBuilt: 2010,
      extras: "Swimming pool, large garden, garage",
    },
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: "$850,000",
    description:
      "A modern apartment located in the heart of the city with an amazing view and contemporary design.",
    image: "https://picsum.photos/1200/800?random=2",
    details: {
      beds: 3,
      baths: 2,
      area: "1500 sqft",
      location: "Central City, Ukraine",
      yearBuilt: 2015,
      extras: "Gym, concierge service, parking",
    },
  },
  {
    id: "3",
    title: "Cozy Cottage",
    price: "$450,000",
    description:
      "A cozy cottage ideal for a family retreat. Charming and rustic with modern conveniences.",
    image: "https://picsum.photos/1200/800?random=3",
    details: {
      beds: 2,
      baths: 1,
      area: "900 sqft",
      location: "Countryside, Ukraine",
      yearBuilt: 2000,
      extras: "Fireplace, garden, near lake",
    },
  },
];

function Property() {
  const { id } = useParams();
  // Знаходимо об’єкт за id із прикладів
  const property =
    sampleProperties.find((p) => p.id === id) || sampleProperties[0];

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ color: "#0d47a1" }}>{property.title}</h1>
      <img
        src={property.image}
        alt={property.title}
        style={{ width: "100%", borderRadius: "10px", margin: "20px 0" }}
      />
      <h2 style={{ color: "#1565c0" }}>{property.price}</h2>
      <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
        {property.description}
      </p>
      <h3 style={{ color: "#0d47a1" }}>Property Details</h3>
      <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
        <li>
          <strong>Beds:</strong> {property.details.beds}
        </li>
        <li>
          <strong>Baths:</strong> {property.details.baths}
        </li>
        <li>
          <strong>Area:</strong> {property.details.area}
        </li>
        <li>
          <strong>Location:</strong> {property.details.location}
        </li>
        <li>
          <strong>Year Built:</strong> {property.details.yearBuilt}
        </li>
        <li>
          <strong>Extras:</strong> {property.details.extras}
        </li>
      </ul>
    </div>
  );
}

export default Property;
