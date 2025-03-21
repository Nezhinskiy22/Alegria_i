import React, { useState } from "react";
import "./FilterBar.css";

const FilterBar = ({
  propertyTypes,
  regions,
  rentTypes,
  onOpenDatePicker,
  onOpenModal,
  onFilterChange,
}) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedRentType, setSelectedRentType] = useState("");

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedType(value);
    onFilterChange({
      propertyType: value,
      region: selectedRegion,
      rentType: selectedRentType,
    });
  };

  const handleRegionChange = (event) => {
    const value = event.target.value;
    setSelectedRegion(value);
    onFilterChange({
      propertyType: selectedType,
      region: value,
      rentType: selectedRentType,
    });
  };

  const handleRentTypeChange = (event) => {
    const value = event.target.value;
    setSelectedRentType(value);

    if (value === "select-dates") {
      onOpenDatePicker(); // Відкрити календар
    } else {
      onFilterChange({
        propertyType: selectedType,
        region: selectedRegion,
        rentType: value,
      });
    }
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar-content">
        {/* Випадаючий список для типів нерухомості */}
        <select
          className="filter-dropdown"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="" disabled>
            Оберіть тип нерухомості
          </option>
          {propertyTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Випадаючий список для регіонів */}
        <select
          className="filter-dropdown"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="" disabled>
            Оберіть регіон
          </option>
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>

        {/* Випадаючий список для типу оренди */}
        <select
          className="filter-dropdown"
          value={selectedRentType}
          onChange={handleRentTypeChange}
        >
          <option value="" disabled>
            Оберіть тип оренди
          </option>
          {rentTypes.map((rentType, index) => (
            <option key={index} value={rentType}>
              {rentType}
            </option>
          ))}
          <option value="select-dates">Обрати дати</option>
        </select>

        {/* Кнопка "Підібрати об'єкти" */}
        <button className="filter-button" onClick={onOpenModal}>
          Підібрати об'єкти
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
