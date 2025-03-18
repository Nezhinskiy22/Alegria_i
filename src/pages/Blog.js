import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: "1",
    title: "Нове слово в нерухомості",
    summary: "Короткий опис статті про нові тенденції в продажу нерухомості.",
    image: "https://picsum.photos/800/500?random=11",
  },
  {
    id: "2",
    title: "Інновації в дизайні житла",
    summary: "Як сучасні технології змінюють уявлення про комфорт.",
    image: "https://picsum.photos/800/500?random=12",
  },
  {
    id: "3",
    title: "Екологічне житло – тренд майбутнього",
    summary: "Переваги та виклики створення екологічно чистих просторів.",
    image: "https://picsum.photos/800/500?random=13",
  },
  {
    id: "4",
    title: "Міські інновації",
    summary: "Як великі міста впроваджують сучасні рішення в нерухомості.",
    image: "https://picsum.photos/800/500?random=14",
  },
  {
    id: "5",
    title: "Мистецтво продажу",
    summary: "Секрети успішних продажів в умовах конкурентного ринку.",
    image: "https://picsum.photos/800/500?random=15",
  },
  {
    id: "6",
    title: "Сучасні технології у будівництві",
    summary: "Як цифровізація впливає на будівництво та ремонт.",
    image: "https://picsum.photos/800/500?random=16",
  },
  {
    id: "7",
    title: "Історія успіху в нерухомості",
    summary: "Історія компанії, яка змінила правила гри на ринку.",
    image: "https://picsum.photos/800/500?random=17",
  },
  {
    id: "8",
    title: "Майбутнє нерухомості",
    summary: "Прогнози експертів щодо розвитку галузі в наступні роки.",
    image: "https://picsum.photos/800/500?random=18",
  },
  {
    id: "9",
    title: "Тенденції ринку житла",
    summary: "Що змінюється в сприйнятті житла серед сучасних покупців.",
    image: "https://picsum.photos/800/500?random=19",
  },
  {
    id: "10",
    title: "Як знайти свій ідеальний дім",
    summary: "Поради для покупців нерухомості від провідних експертів.",
    image: "https://picsum.photos/800/500?random=20",
  },
];

function Blog() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#0d47a1", marginBottom: "20px" }}>Блог</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start", // вирівнюємо по лівому краю
        }}
      >
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/blog/${article.id}`}
            state={article}
            style={{ textDecoration: "none", margin: "15px" }}
          >
            <div
              style={{
                width: "300px",
                background: "linear-gradient(135deg, #ffffff, #bbdefb)",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "10px" }}>
                <h2
                  style={{
                    color: "#0d47a1",
                    fontSize: "18px",
                    margin: "10px 0",
                  }}
                >
                  {article.title}
                </h2>
                <p
                  style={{ fontSize: "14px", lineHeight: "1.4", color: "#333" }}
                >
                  {article.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
