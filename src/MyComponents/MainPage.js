import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("en"); // Add state for language

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("es"); // Switch to Spanish
    } else if (language === "es") {
      setLanguage("fr"); // Switch to French
    } else {
      setLanguage("en"); // Switch back to English
    }
  };

  const getTranslation = (key) => {
    const translations = {
      en: {
        title: "Explore Our Apps",
        description:
          "Hello! I'm Yassir, a passionate web developer with expertise in front-end and back-end technologies. I create beautiful, functional, and user-friendly applications.",
        buttonLabel: "Click to See More",
      },
      es: {
        title: "Explora Nuestras Aplicaciones",
        description:
          "¡Hola! Soy Yassir, un desarrollador web apasionado con experiencia en tecnologías de front-end y back-end. Creo aplicaciones hermosas, funcionales y fáciles de usar.",
        buttonLabel: "Haz clic para ver más",
      },
      fr: {
        title: "Explorez Nos Applications",
        description:
          "Bonjour! Je suis Yassir, un développeur web passionné avec une expertise en technologies front-end et back-end. Je crée des applications belles, fonctionnelles et conviviales.",
        buttonLabel: "Cliquez pour voir plus",
      },
    };

    return translations[language][key];
  };

  const cardsData = [
    {
      id: 1,
      title: "Calculator",
      description:
        "This calculator will help you solve all your mathematical problems.",
      bg: "primary",
      path: "/src/MyComponents/calculator.js",
    },
    {
      id: 2,
      title: "Profiles",
      description: "Manage, add, and delete user profiles seamlessly.",
      bg: "success",
      path: "/src/MyComponents/ProfilApp.js",
    },
    {
      id: 3,
      title: "Flags API",
      description: "Navigate through countries effortlessly using a flags API.",
      bg: "warning",
      path: "/src/MyComponents/FlagApp.js",
    },
    {
      id: 4,
      title: "TasksToDo",
      description: "Organize and manage all your tasks efficiently.",
      bg: "info",
      path: "/src/MyComponents/TDLInterface.js",
    },
    {
      id: 5,
      title: "CC1-React",
      description:
        "Prepare for your React exams with this interactive app that covers key concepts, quizzes, and challenges to test your knowledge and skills.",
      bg: "blue",
      path: "/src/MyComponents/Home.js",
    },
  ];

  return (
    <div className={`Mcont ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Container className="balisCont">
        {/* Dark Mode Toggle Button */}
        <div className="d-flex justify-content-end mb-3">
          <Button
            variant={isDarkMode ? "light" : "dark"}
            onClick={toggleDarkMode}
            style={{ "margin-top": "20px" }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        {/* Language Toggle Button */}
        <div className="d-flex justify-content-end mb-3">
          <Button
            variant="secondary"
            onClick={toggleLanguage}
            style={{ "margin-top": "20px" }}
          >
            {language === "en"
              ? "Español"
              : language === "es"
              ? "Français"
              : "English"}
          </Button>
        </div>

        <h1
          className="text-center Mtitle-gradient"
          style={{ fontWeight: "bold" }}
        >
          {getTranslation("title")}
        </h1>

        {/* About Section */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <div className="about-section">
              <img src="avatar.webp" alt="About me" className="about-image" />
              <p className="about-description">
                {getTranslation("description")}
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {cardsData.map((card) => (
            <Col md={3} key={card.id} className="mb-4">
              <Card
                className="h-100 shadow-lg text-white mcard card-hover"
                style={{
                  border: "none",
                  background: `linear-gradient(135deg, ${getCardColor(
                    card.bg
                  )}, #ffffff)`,
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title
                      className="text-uppercase mb-3"
                      style={{ fontWeight: "bold", letterSpacing: "1px" }}
                    >
                      {card.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "0.9rem" }}>
                      {card.description}
                    </Card.Text>
                  </div>
                  <Link to={card.path} className="mr-5 mt-2">
                    <Button variant="light" className="mr-5 mt-2 text-dark">
                      {getTranslation("buttonLabel")}
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function getCardColor(variant) {
  const colors = {
    primary: "#004E64",
    success: "#00A5CF",
    warning: "#8C86AA",
    info: "#25A18E",
    blue: "#00A",
  };
  return colors[variant] || "#eaeaea";
}

export default MainPage;
