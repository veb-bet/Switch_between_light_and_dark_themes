import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Определяем стили для светлой и темной темы
const lightTheme = {
  backgroundColor: "#C6B6F2",
  color: "#1A1A1A",
  switchBackgroundColor: "#8A4FFF",
  switchButtonColor: "#C6B6F2",
  transition: "background-color 0.5s ease, color 0.5s ease",
};

const darkTheme = {
  backgroundColor: "#1A1A1A",
  color: "#C6B6F2",
  switchBackgroundColor: "#3F3F3F",
  switchButtonColor: "#8A4FFF",
  transition: "background-color 0.5s ease, color 0.5s ease",
};

// Компонент переключателя темы
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: theme.switchBackgroundColor,
        color: theme.switchButtonColor,
        padding: "10px 20px",
        borderRadius: "20px",
        cursor: "pointer",
        transition: theme.transition,
      }}
      onClick={toggleTheme}
    >
      {theme === lightTheme ? "Dark Mode" : "Light Mode"}
    </div>
  );
};

// Главная страница
const Home = ({ theme }) => {
  const [cardImage, setCardImage] = useState(null);
  const [prediction, setPrediction] = useState("");

  const getRandomCard = () => {
    // Код для получения случайной карты и предсказания
    setCardImage("https://example.com/tarot-card.jpg");
    setPrediction("Your future holds great mystery and intrigue...");
  };

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: theme.transition,
      }}
    >
      <h1>Welcome to the Mystical Tarot Realm</h1>
      <p>
        Delve into the unknown and uncover your destiny with our online tarot
        reading service.
      </p>
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: theme.switchBackgroundColor,
          borderRadius: "20px",
          transition: theme.transition,
        }}
      >
        {cardImage ? (
          <div>
            <img
              src={cardImage}
              alt="Tarot Card"
              style={{ maxWidth: "200px", marginBottom: "20px" }}
            />
            <p>{prediction}</p>
          </div>
        ) : (
          <button
            onClick={getRandomCard}
            style={{
              backgroundColor: theme.switchButtonColor,
              color: theme.color,
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              transition: theme.transition,
            }}
          >
            Get Your Reading
          </button>
        )}
      </div>
    </div>
  );
};

// Контактная страница
const Contact = ({ theme }) => {
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: theme.transition,
      }}
    >
      <h1>Contact Us</h1>
      <p>
        Reach out to us for more information or to schedule a private tarot
        reading.
      </p>
      <p>Email: info@mystical-tarot.com</p>
      <p>Phone: *-***-***-**-**</p>
    </div>
  );
};

// Основной компонент
const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <Router>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          transition: theme.transition,
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
            transition: theme.transition,
          }}
        >
          <Link
            to="/"
            style={{
              marginRight: "20px",
              color: theme.color,
              textDecoration: "none",
              transition: theme.transition,
            }}
          >
            Home
          </Link>
          <Link
            to="/contact"
            style={{
              marginLeft: "20px",
              color: theme.color,
              textDecoration: "none",
              transition: theme.transition,
            }}
          >
            Contact
          </Link>
        </nav>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route exact path="/" element={<Home theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
