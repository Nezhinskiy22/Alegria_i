const mongoose = require("mongoose");
const Property = require("./models/Property");
const faker = require("faker"); // Використовуємо faker для генерації випадкових даних

mongoose.connect("mongodb://localhost:27017/real_estate_app");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB");

  // Видалення існуючих даних
  await Property.deleteMany({});

  // Генерація 200 об'єктів нерухомості
  const properties = [];
  for (let i = 0; i < 200; i++) {
    properties.push({
      title: faker.address.streetName(), // Випадкова назва
      description: faker.lorem.paragraph(), // Випадковий опис
      price: faker.datatype.number({ min: 100000, max: 1000000 }), // Число без символу $
      image: `https://picsum.photos/640/480?random=${i}`, // Випадкове зображення
      location: faker.address.city(), // Випадкове місто
    });
  }

  await Property.insertMany(properties);
  console.log("Database seeded with 200 properties!");
  mongoose.connection.close();
});
