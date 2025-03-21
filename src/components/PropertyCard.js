import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property._id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transition: "transform 0.3s ease",
          cursor: "pointer",
          height: "100%", // Забезпечує, що картка займає весь доступний простір
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {/* Зображення */}
        <div
          style={{
            width: "100%",
            aspectRatio: "3 / 2", // Співвідношення сторін для зображення
            overflow: "hidden",
          }}
        >
          <img
            src={property.image}
            alt={property.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Забезпечує, щоб зображення заповнювало контейнер
            }}
          />
        </div>
        {/* Контент */}
        <div
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1, // Забезпечує, що контент займає доступний простір
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              color: "#d35400",
              marginBottom: "10px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {property.title}
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              marginBottom: "15px",
            }}
          >
            ${property.price}
          </p>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#f39c12",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
