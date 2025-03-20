const mongoose = require("mongoose");
const Property = require("./models/Property");

mongoose.connect("mongodb://localhost:27017/real_estate_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB");

  // Видалення існуючих даних
  await Property.deleteMany({});

  // Додавання нових даних
  const properties = [
    {
      title: "Beautiful Beach House",
      description: "A beautiful house near the beach with stunning views.",
      price: 500000,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYWNoJTIwaG91c2V8ZW58MHx8fHwxNjE2NzY3NzYw&ixlib=rb-1.2.1&q=80&w=1080",
      location: "Malaga, Spain",
    },
    {
      title: "Modern Apartment",
      description: "A modern apartment in the city center.",
      price: 300000,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFwYXJ0bWVudHxlbnwwfHx8fDE2MTY3Njc3NjA&ixlib=rb-1.2.1&q=80&w=1080",
      location: "Barcelona, Spain",
    },
    {
      title: "Cozy Cottage",
      description: "A cozy cottage in the countryside.",
      price: 200000,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvdHRhZ2V8ZW58MHx8fHwxNjE2NzY3NzYw&ixlib=rb-1.2.1&q=80&w=1080",
      location: "Valencia, Spain",
    },
  ];

  await Property.insertMany(properties);
  console.log("Database seeded with 3 properties!");
  mongoose.connection.close();
});
