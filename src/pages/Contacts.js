import React from "react";
import { motion } from "framer-motion";
import "./Contacts.css";

const Contacts = () => {
  return (
    <motion.div
      className="contacts-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="contacts-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Зв'яжіться з нами
      </motion.h1>

      <motion.p
        className="contacts-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Ми завжди раді допомогти вам! Залиште свої контактні дані, і ми
        зв'яжемося з вами найближчим часом.
      </motion.p>

      <motion.div
        className="contacts-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <form>
          <div className="form-group">
            <label htmlFor="name">Ваше ім'я</label>
            <input type="text" id="name" placeholder="Введіть ваше ім'я" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Ваш email</label>
            <input type="email" id="email" placeholder="Введіть ваш email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Ваше повідомлення</label>
            <textarea
              id="message"
              placeholder="Напишіть ваше повідомлення"
            ></textarea>
          </div>
          <motion.button
            className="submit-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Надіслати
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="contacts-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <h2>Наші контакти</h2>
        <p>Телефон: +380 123 456 789</p>
        <p>Email: info@realestate.com</p>
        <p>Адреса: вул. Незалежності, 12, Київ, Україна</p>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
