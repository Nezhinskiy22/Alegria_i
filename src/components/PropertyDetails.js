import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../api";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getPropertyById(id);
        setProperty(data);
      } catch (error) {
        console.error(`Error fetching property with id ${id}:`, error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src={property.image}
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
