import React from "react";
import "./About.css";

const About = () => {
  const managers = [
    {
      name: "Олександр Іваненко",
      position: "Менеджер з продажу",
      phone: "+380 67 123 4567",
      telegram: "https://t.me/oleksandr_ivanenko",
      email: "oleksandr.ivanenko@example.com",
      photo: "https://picsum.photos/200/200?random=1",
    },
    {
      name: "Марія Коваленко",
      position: "Менеджер з оренди",
      phone: "+380 50 987 6543",
      telegram: "https://t.me/maria_kovalenko",
      email: "maria.kovalenko@example.com",
      photo: "https://picsum.photos/200/200?random=2",
    },
    {
      name: "Ігор Петренко",
      position: "Керівник відділу",
      phone: "+380 63 456 7890",
      telegram: "https://t.me/ihor_petrenko",
      email: "ihor.petrenko@example.com",
      photo: "https://picsum.photos/200/200?random=3",
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">Про нас</h1>
      <p className="about-description">
        Ми — команда професіоналів, яка допомагає знайти ідеальну нерухомість
        для вас. Наші менеджери завжди готові надати консультацію та допомогти з
        вибором.
      </p>

      <div className="managers-container">
        {managers.map((manager, index) => (
          <div className="manager-card" key={index}>
            <img
              src={manager.photo}
              alt={manager.name}
              className="manager-photo"
            />
            <h2 className="manager-name">{manager.name}</h2>
            <p className="manager-position">{manager.position}</p>
            <p className="manager-contact">
              <strong>Телефон:</strong> {manager.phone}
            </p>
            <p className="manager-contact">
              <strong>Telegram:</strong>{" "}
              <a
                href={manager.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {manager.telegram}
              </a>
            </p>
            <p className="manager-contact">
              <strong>Email:</strong> {manager.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
