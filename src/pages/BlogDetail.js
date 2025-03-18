import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";

// Спільний масив статей (можна винести в окремий файл для використання в усіх компонентах)
const articles = [
  {
    id: "1",
    title: "Нове слово в нерухомості",
    content:
      "Повний текст статті про нові тенденції в продажу нерухомості. Тут розкриваються деталі, приклади та досвід провідних експертів.",
    image: "https://picsum.photos/1200/800?random=11",
  },
  {
    id: "2",
    title: "Інновації в дизайні житла",
    content:
      "Детальний аналіз сучасних технологій у дизайні житла, приклади успішних проектів та нові тренди.",
    image: "https://picsum.photos/1200/800?random=12",
  },
  // ... решта статей
];

const suggestedProperty = {
  id: "1",
  title: "Luxury Villa",
  price: "$1,200,000",
  image: "https://picsum.photos/800/600?random=4",
};

function BlogDetail() {
  const { id } = useParams();
  const location = useLocation();

  // Якщо дані статті передані через state, використовуємо їх, інакше шукаємо статтю в масиві
  const article = location.state || articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Статтю не знайдено</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ color: "#0d47a1" }}>{article.title}</h1>
      <img
        src={article.image}
        alt={article.title}
        style={{ width: "100%", borderRadius: "10px", margin: "20px 0" }}
      />
      <p style={{ lineHeight: "1.6", marginBottom: "40px" }}>
        {article.content}
      </p>

      {/* Блок з пропозицією об'єкту нерухомості */}
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff, #bbdefb)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#0d47a1" }}>
          Можливо, цей об'єкт вас зацікавить:
        </h2>
        <PropertyCard property={suggestedProperty} />
        <Link
          to={`/property/${suggestedProperty.id}`}
          style={{ color: "#1565c0", fontWeight: "bold" }}
        >
          Детальніше
        </Link>
      </div>
    </div>
  );
}

export default BlogDetail;
