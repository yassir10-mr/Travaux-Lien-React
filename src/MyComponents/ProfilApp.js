import React, { useState } from 'react';
import ListeProfils from './ListeProfils';
import FormulaireProfil from './FormulaireProfil';

function ProfilApp() {
  const [profils, setProfils] = useState([
    {
      nom: 'Alice',
      age: 25,
      profession: 'Développeuse',
      image: 'https://i.imgur.com/04zmYgA.jpg',
    },
    {
      nom: 'July',
      age: 24,
      profession: 'Designer',
      image: '/profil3.jpg',
    },
    {
      nom: 'Youness',
      age: 22,
      profession: 'Jobless',
      image: '/profil1.jpg',
    },
  ]);

  const ajouterProfil = (profil) => {
    setProfils([...profils, profil]);
  };

  const supprimerProfil = (index) => {
    setProfils(profils.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-primary mb-4">Liste des Profils</h1>
      <FormulaireProfil ajouterProfil={ajouterProfil} />
      <ListeProfils profils={profils} supprimerProfil={supprimerProfil} />
    </div>
  );
}

export default ProfilApp;
