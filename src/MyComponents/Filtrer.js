import { useState } from "react";
import NavBar from "./NavBar";

const salaires = [
  {
    _id: "s1",
    nomsal: "Alami",
    prenomsal: "Sara",
    fonction: "Technicien",
    service: { codeser: "1", nomser: "Informatique" },
  },
  {
    _id: "s2",
    nomsal: "Bennani",
    prenomsal: "Omar",
    fonction: "Développeur",
    service: { codeser: "2", nomser: "Développement" },
  },
  {
    _id: "s3",
    nomsal: "Fakih",
    prenomsal: "Nadia",
    fonction: "Analyste",
    service: { codeser: "3", nomser: "Analyse" },
  },
  {
    _id: "s4",
    nomsal: "El Amrani",
    prenomsal: "Youssef",
    fonction: "Administrateur",
    service: { codeser: "4", nomser: "Réseaux" },
  },
  {
    _id: "s5",
    nomsal: "Zouine",
    prenomsal: "Laila",
    fonction: "Consultant",
    service: { codeser: "5", nomser: "Consulting" },
  },
  {
    _id: "s6",
    nomsal: "Tazi",
    prenomsal: "Karim",
    fonction: "Ingénieur",
    service: { codeser: "6", nomser: "Production" },
  },
  {
    _id: "s7",
    nomsal: "Mekouar",
    prenomsal: "Salma",
    fonction: "Responsable",
    service: { codeser: "7", nomser: "Marketing" },
  },
  {
    _id: "s8",
    nomsal: "Nouiri",
    prenomsal: "Hamid",
    fonction: "Opérateur",
    service: { codeser: "8", nomser: "Opérations" },
  },
  {
    _id: "s9",
    nomsal: "Kabbaj",
    prenomsal: "Fatima",
    fonction: "Chef de projet",
    service: { codeser: "9", nomser: "Projets" },
  },
  {
    _id: "s10",
    nomsal: "Rahal",
    prenomsal: "Ali",
    fonction: "Technicien",
    service: { codeser: "10", nomser: "Support" },
  },
];

export default function Composant3() {
  const [service, setService] = useState("");
  const [results, setResults] = useState([]);
  // const [salaires,setSalaires]=useState("");
  /*
  useEffect(()=>{
  async function InfosSalire(){
  const res=await fetch("http://localhost:8000/salaires")
  const data=await res.json();
  setSalaires(data)
  }
  InfosSalire();
  },[salaires])*/

  function handleSearch() {
    const filteredResults = salaires.filter(
      (salaire) =>
        salaire.service.nomser.toLowerCase() === service.toLowerCase()
    );
    setResults(filteredResults);
  }

  return (
    <div style={containerStyle}>
      <div>
        <NavBar />
      </div>
      <h1 style={titleStyle}>Recherche par service:</h1>
      <input
        type="text"
        placeholder="Entrer le nom du service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSearch} style={buttonStyle}>
        Chercher
      </button>
      <div style={resultsStyle}>
        <h2>Résultat</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((salaire) => (
              <li key={salaire._id}>
                <strong>Nom:</strong> {salaire.nomsal} <strong>Prénom:</strong>{" "}
                {salaire.prenomsal}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun salarié n’est affecté à ce service.</p>
        )}
      </div>
    </div>
  );
}

// Styling
const containerStyle = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "600px",
  margin: "20px auto",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const resultsStyle = {
  marginTop: "20px",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};
