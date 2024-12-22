import React from 'react';

function CarteProfil({ nom, age, profession, image, supprimerProfil }) {
  return (
    <div className="card profcard shadow-sm" style={{ width: '18rem', margin: '1rem' }}>
      <img src={image} className="card-img-top" alt={nom} style={{height: "10rem", width: "10rem", margin: "auto", objectFit: 'cover', borderRadius: "50%" }} />
      <div className="card-body text-center">
        <h5 className="card-title text-primary">{nom}</h5>
        <p className="card-text text-secondary">Âge : {age}</p>
        <p className="card-text text-secondary">Profession : {profession}</p>
        <button className="btn btn-danger btn-sm mt-2" onClick={supprimerProfil}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default CarteProfil;
