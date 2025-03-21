import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";
import { getProperties } from "../api"; // Імпортуємо функцію для отримання даних з API
import "./Home.css";
import Contacts from "./Contacts";
import { Route } from "react-router-dom";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // Відображаємо 12 карток
  const [selectedType, setSelectedType] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedRentType, setSelectedRentType] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [regions, setRegions] = useState([]);
  const [rentTypes, setRentTypes] = useState([]);

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

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12); // Завантажуємо ще 12 карток
  };

  const handleFilterChange = (filters) => {
    setSelectedType(filters.propertyType);
    setSelectedRegion(filters.region);
    setSelectedRentType(filters.rentType);
  };

  const handleModalOpen = () => {
    // Handle modal open logic
  };

  return (
    <div className="home-container">
      <div className="slider-container">
        <Slider />
      </div>

      <FilterBar
        propertyTypes={propertyTypes}
        regions={regions}
        rentTypes={rentTypes}
        onOpenDatePicker={() => setShowDatePicker(true)}
        onOpenModal={handleModalOpen}
        onFilterChange={handleFilterChange}
      />

      <div className="property-list">
        {properties.slice(0, visibleCount).map((property) => (
          <div className="property-card" key={property._id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {visibleCount < properties.length && (
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
