import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link
      to={{
        pathname: `/property/${property._id}`,
        state: {
          property,
          previewImage: property.image,
        },
      }}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          margin: "15px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={property.image}
          alt={property.title}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        />
        <h2 style={{ color: "#d35400", marginBottom: "10px" }}>
          {property.title}
        </h2>
        <p style={{ color: "#555", marginBottom: "10px" }}>{property.price}</p>
        <button style={{ width: "100%" }}>View Details</button>
      </div>
    </Link>
  );
}

export default PropertyCard;
