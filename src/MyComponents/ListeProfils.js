import React from 'react';
import CarteProfil from './CarteProfil';

function ListeProfils({ profils, supprimerProfil }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {profils.map((profil, index) => (
        <CarteProfil
          key={index}
          nom={profil.nom}
          age={profil.age}
          profession={profil.profession}
          image={profil.image}
          supprimerProfil={() => supprimerProfil(index)}
        />
      ))}
    </div>
  );
}

export default ListeProfils;
