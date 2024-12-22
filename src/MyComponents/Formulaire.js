import { useState } from "react";
import NavBar from "./NavBar";

export default function Formulaire() {
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    setDisabled(true);
  }

  return (
    <div style={containerStyle}>
      <div>
        <NavBar />
      </div>
      <form onSubmit={HandleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Formulaire de Véhicule</h2>
        <label style={labelStyle}>Matricule:</label>
        <input
          type="text"
          value={matricule}
          onChange={(e) => setMatricule(e.target.value)}
          disabled={disabled}
          style={inputStyle}
        />
        <label style={labelStyle}>Marque:</label>
        <input
          type="text"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          disabled={disabled}
          style={inputStyle}
        />
        <label style={labelStyle}>Date de mise en circulation:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          disabled={disabled}
          style={inputStyle}
        />
        <label style={labelStyle}>Couleur:</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          disabled={disabled}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Confirmer
        </button>
      </form>
      {isSubmit && (
        <Afficher
          matricule={matricule}
          marque={marque}
          date={date}
          color={color}
        />
      )}
    </div>
  );
}

function Afficher({ matricule, marque, date, color }) {
  if (!matricule || !marque || !date || !color) return null;
  return (
    <div style={summaryStyle}>
      <h2 style={headingStyle}>Récapitulatif des Informations</h2>
      <p style={summaryTextStyle}>
        Matricule: <strong>{matricule}</strong>
      </p>
      <p style={summaryTextStyle}>
        Marque: <strong>{marque}</strong>
      </p>
      <p style={summaryTextStyle}>
        Date de mise en circulation: <strong>{date}</strong>
      </p>
      <p style={summaryTextStyle}>
        Couleur: <strong>{color}</strong>
      </p>
    </div>
  );
}

// Styling
const containerStyle = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "500px",
  margin: "20px auto",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const headingStyle = {
  textAlign: "center",
  color: "#4CAF50",
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: "5px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const summaryStyle = {
  marginTop: "20px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const summaryTextStyle = {
  fontSize: "16px",
  margin: "5px 0",
};
