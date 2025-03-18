import React, { useState } from "react";

function Slider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "35vh",
      }}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          style={{
            display: index === currentIndex ? "block" : "none",
            width: "100%",
            height: "35vh",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(13,71,161,0.3)), url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h2 style={{ margin: 0, color: "#0d47a1" }}>{item.title}</h2>
            <p style={{ margin: 0 }}>{item.price}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        ❯
      </button>
    </div>
  );
}

export default Slider;
