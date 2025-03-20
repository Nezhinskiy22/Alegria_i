import React, { useEffect, useState } from "react";
import { getProperties } from "../api";
import PropertyCard from "./PropertyCard";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Properties</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
