import React from "react";
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

export default function Table() {
  /*
  const [salaire,setSalaire]=useState("");

  useEffect(()=>{
  async function InfosSalire(){
  const res=await fetch("http://localhost:8000/salaires")
  const data=await res.json();
  setSalaire(data)
  }
  },[salaire])
  
  */
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div>
        <NavBar />
      </div>
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>
        Liste des Salariés
      </h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "90%",
          margin: "20px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={headerStyle}>Nom</th>
            <th style={headerStyle}>Prénom</th>
            <th style={headerStyle}>Fonction</th>
            <th style={headerStyle}>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaires.map((salaire, index) => (
            <tr
              key={salaire._id}
              style={{
                backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
              }}
            >
              <td style={cellStyle}>{salaire.nomsal}</td>
              <td style={cellStyle}>{salaire.prenomsal}</td>
              <td style={cellStyle}>{salaire.fonction}</td>
              <td style={cellStyle}>{salaire.service.nomser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const headerStyle = {
  padding: "10px",
  textAlign: "left",
  fontSize: "16px",
  border: "1px solid #ddd",
};

const cellStyle = {
  padding: "10px",
  textAlign: "left",
  border: "1px solid #ddd",
};
