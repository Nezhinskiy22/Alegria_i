import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link
      to={{
        pathname: `/property/${property.id}`,
        state: {
          property,
          previewImage: property.image, // Передаємо URL зображення
        },
      }}
      style={{
        textDecoration: "none", // Прибираємо підкреслення
        color: "inherit", // Зберігаємо колір тексту
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff, #bbdefb)",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          margin: "10px",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={property.image}
          alt={property.title}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h2 style={{ color: "#0d47a1" }}>{property.title}</h2>
        <p>{property.price}</p>
      </div>
    </Link>
  );
}

export default PropertyCard;
