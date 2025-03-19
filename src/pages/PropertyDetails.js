import React from "react";
import { useLocation } from "react-router-dom";

function PropertyDetails() {
  const location = useLocation();
  const { property, previewImage } = location.state || {};

  if (!property || !previewImage) {
    return <p>Property details not found</p>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src={previewImage}
        alt={property.title}
        style={{
          width: "100%",
          borderRadius: "15px",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      />
      <h1 style={{ color: "#d35400", marginBottom: "20px" }}>
        {property.title}
      </h1>
      <p style={{ color: "#555", marginBottom: "20px" }}>{property.price}</p>
      <p style={{ lineHeight: "1.6", color: "#333" }}>{property.description}</p>
    </div>
  );
}

export default PropertyDetails;
