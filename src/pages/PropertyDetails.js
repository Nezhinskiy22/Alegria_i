import React from "react";
import { useLocation } from "react-router-dom";

function PropertyDetails() {
  const location = useLocation();
  const { property, previewImage } = location.state || {}; // Отримуємо передані дані

  if (!property || !previewImage) {
    return <p>Property details not found</p>; // Якщо дані не передані
  }

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={previewImage} // Використовуємо передане зображення
        alt={property.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h1>{property.title}</h1>
      <p>{property.price}</p>
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyDetails;
